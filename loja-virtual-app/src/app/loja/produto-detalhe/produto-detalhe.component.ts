import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Produto } from '../../admin/produto/produto.model';
import { ProdutoService } from '../../admin/produto/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../admin/categoria/categoria.service';
import { ToastrService } from 'ngx-toastr';
import { Carrinho } from '../carrinho/carrinho.model';
import { CarrinhoService } from '../carrinho/carrinho.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  providers: [ProdutoService, CategoriaService, CarrinhoService],
  styleUrls: ['./produto-detalhe.component.css']
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
  public tamEscolhido;
  public corEscolhida: string;
  public tamanhoInvalido = false;
  public carrinho: Carrinho = new Carrinho();

  public cores = ['Preto', 'Vermelho', 'Azul', 'Cinza'];

  public tamanhos: string[] = ['P', 'M', 'G', 'GG'];

  constructor(private http: Http, private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private router: Router,
    public toastr: ToastrService,
    public carrinhoService: CarrinhoService
  ) {
    this.produto = new Produto();
    this.carrinho = new Carrinho();
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
    this.tamanhoInvalido = false;
  }

  public carregar() {
    if (this.id > 0) {
      this.produtoService.getById(this.id).subscribe(_produto => {
        this.produto = _produto;
        this.imagens = this.produto.imagens;
      });
    }
  }

  public adicionarCarrinho() {
    if (!this.tamEscolhido) {
      this.tamanhoInvalido = true;
    } else {
      this.tamanhoInvalido = false;
      this.carrinho.exemplarprodutos = this.produto.exemplarprodutos;
      this.carrinhoService.adicionarProduto(this.carrinho);
      console.log('Adicionar ao carrinho');
    }
  }


}
