import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Produto } from './produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  // tslint:disable-next-line:no-trailing-whitespace
  produto: Produto;

  constructor(private http: Http) {
   this.produto = new Produto();
  }

  addImagem(evento) {
  }

  ngOnInit() {
    console.log('Produto: ', this.produto);
  }

  cadastrar() {
    console.log('OOOOOOU', JSON.stringify(this.produto));
    this.produto.categoria = 1;//, {produto: this.produto}
    this.http.post('http://localhost:1337/produto',
    {nome: this.produto.nome, quantidade: this.produto.quantidade, custo: this.produto.custo})
    .subscribe(data => {
      console.log('Retorno: ', data.json());
    });
    console.log('asdasdasdsad');
  }

}
