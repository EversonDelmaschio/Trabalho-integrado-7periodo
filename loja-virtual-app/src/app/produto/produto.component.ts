import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Produto } from './produto.model';
import { ProdutoService } from './produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria/categoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  providers: [ProdutoService, CategoriaService],
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  // tslint:disable-next-line:no-trailing-whitespace
  public produto: Produto;
  public categorias = [];
  public id: number;
  public sub: any;
  public categoriaId = 1;

  constructor(private http: Http, private produtoService: ProdutoService,
              private route: ActivatedRoute,
              private categoriaService: CategoriaService,
              private router: Router,
              public toastr: ToastrService
              ) {
   this.produto = new Produto();
  }

  addImagem(evento) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });

    if (this.id > 0) {
      this.produtoService.getById(this.id)
      .subscribe(
        _produto => {
          this.produto = _produto;
      });
    }

    this.categoriaService.getAll().subscribe(data => {
      this.categorias = data;
    });
  }

  cadastrar() {
    if (this.id === 0) {
      this.produtoService.post({produto: this.produto})
      .subscribe(p => {
        this.produto = new Produto();
      });
      this.toastr.success('Sucesso!', 'Produto cadastrado com sucesso!');
    } else {
      this.produtoService.put(this.id, {produto: this.produto})
      .subscribe(p => {
        this.toastr.success('Sucesso!', 'Produto atualizado com sucesso!');
        this.router.navigate(['lista-produto']);
      });
    }
  }

  public selecionar(item: any) {
    this.categoriaId = item.target.value;
    if (this.categoriaId) {
      this.produto.categoria = this.categoriaId;
    }
  }

}
