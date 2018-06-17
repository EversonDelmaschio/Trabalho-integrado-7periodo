import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../admin/produto/produto.service';
import {CategoriaService} from "../../admin/categoria/categoria.service";

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.component.html',
  styleUrls: ['./menu-inicio.component.css'],
  providers: [ProdutoService]
})
export class MenuInicioComponent implements OnInit {

  public produtos = [];
  public showSpinner = true;
  constructor(private serviceProduto: ProdutoService) { }

  ngOnInit() {
    console.log('Menu Inicio');
    this.serviceProduto.getAll().subscribe(data => {
      this.produtos = data;
      this.showSpinner = false;
    });
  }

}
