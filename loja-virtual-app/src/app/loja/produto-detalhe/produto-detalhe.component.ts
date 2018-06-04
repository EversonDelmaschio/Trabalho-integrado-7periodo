import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Produto } from '../../admin/produto/produto.model';
import { ProdutoService } from '../../admin/produto/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../admin/categoria/categoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  providers: [ProdutoService, CategoriaService],
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {
    // tslint:disable-next-line:no-trailing-whitespace
  public produto: Produto = new Produto();
  public categorias = [];
  public id: number;
  public sub: any;
  public categoriaId = 1;

  cores = ['Preto', 'Branco', 'Azul', 'Cinza'];

  tamanho: string[] = ['P', 'M', 'G', 'GG'];

  constructor(private http: Http, private produtoService: ProdutoService,
              private route: ActivatedRoute,
              private categoriaService: CategoriaService,
              private router: Router,
              public toastr: ToastrService) {}

  ngOnInit() {
    // this.id = 10;
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
       this.carregar();
    });
  }

  carregar() {
    if (this.id > 0) {
      this.produtoService.getById(this.id).subscribe(_produto => {
          this.produto = _produto;
      });
    }
  }


}
