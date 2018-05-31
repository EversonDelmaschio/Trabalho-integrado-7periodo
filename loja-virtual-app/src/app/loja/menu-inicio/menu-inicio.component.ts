import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../admin/produto/produto.service';

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.component.html',
  styleUrls: ['./menu-inicio.component.css'],
  providers: [ProdutoService]
})
export class MenuInicioComponent implements OnInit {

  public produtos = [];
  constructor(private serviceProduto: ProdutoService) { }

  ngOnInit() {
    this.serviceProduto.getAll().subscribe(data => {
      this.produtos = data;
      console.log(this.produtos);
    });
  }

}
