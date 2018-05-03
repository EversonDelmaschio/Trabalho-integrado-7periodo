import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Produto } from './produto.model';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  providers: [ProdutoService],
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  // tslint:disable-next-line:no-trailing-whitespace
  public produto: Produto;
  public categorias = ['Categoria 1', 'Categoria 2', 'Categoria 3'];

  constructor(private http: Http, private produtoService: ProdutoService) {
   this.produto = new Produto();
  }

  addImagem(evento) {
  }

  ngOnInit() {}

  cadastrar() {
    this.produto.categoria = 1;
    this.produtoService.post({produto: this.produto})
    .subscribe(p => {
      console.log('Produto: ', p);
    });
  }

}
