import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  descricao: string = 'CAMISETA SUPER HOMEM';
  quantidade: number = 1;
  venda: number = 0;
  custo: number = 0;
  modelo: string = '';
  categoria: string ='';
  imagems: string[] = ["imagem 1", "imagem 2", "imagem 3"];

  constructor() { }

  addImagem(evento){
    this.imagems.push(evento);
  }

  ngOnInit() {
  }

}
