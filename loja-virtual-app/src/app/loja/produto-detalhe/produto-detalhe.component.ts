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
  styleUrls: ['./produto-detalhe.component.css'],
  host: {'class': "page-content"}
})
export class ProdutoDetalheComponent implements OnInit {
    // tslint:disable-next-line:no-trailing-whitespace
  public produto: Produto = new Produto();
  public categorias = [];
  public imagens = [];
  public id: number;
  public sub: any;
  public categoriaId = 1;
  public linhaCores = '';
  public tamEscolhido = 'P';
  public corEscolhida: string;

  public cores = ['Preto', 'Vermelho', 'Azul', 'Cinza'];

  public tamanhos: string[] = ['P', 'M', 'G', 'GG'];

  constructor(private http: Http, private produtoService: ProdutoService,
              private route: ActivatedRoute,
              private categoriaService: CategoriaService,
              private router: Router,
              public toastr: ToastrService
              ) {
   this.produto = new Produto();
  }

  ngOnInit() {
    this.listaCores();
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
       this.carregar();
    });
  }

  listaCores() {
    for (let i = 0; i < this.cores.length; i++) {
      if (i + 1 === this.cores.length) {
        this.linhaCores = this.linhaCores + this.cores[i] + '...';
      } else {
        this.linhaCores = this.linhaCores + this.cores[i] + ',' + ' ';
      }
    }
  }

  public selecionarTam(item: any) {
    console.log(item.target.value);
    this.tamEscolhido = item.target.value;
  }

  carregar() {
    if (this.id > 0) {
      this.produtoService.getById(this.id).subscribe(_produto => {
          this.produto = _produto;
          this.imagens = this.produto.imagens;
      });
    }
  }


}
