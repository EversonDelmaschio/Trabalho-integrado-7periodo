import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: 'lista-produto.component.html',
  providers: [ProdutoService],
  styleUrls: ['lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  public produtos: Array<any>;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.getAll()
    .subscribe(
      _produtos => {
        this.produtos = _produtos;
        console.log(this.produtos);
    });
  }

}
