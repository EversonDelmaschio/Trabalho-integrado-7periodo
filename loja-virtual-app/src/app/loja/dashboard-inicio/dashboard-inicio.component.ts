import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../admin/produto/produto.service';
import {CategoriaService} from "../../admin/categoria/categoria.service";

@Component({
  selector: 'app-dashboard-inicio',
  templateUrl: './dashboard-inicio.component.html',
  styleUrls: ['./dashboard-inicio.component.css'],
  providers: [ProdutoService, CategoriaService],
  host: {'class': "page-content"}
})
export class DashboardInicioComponent implements OnInit {
  public filtroCategoria = [];
  public categorias = [];
  public produtos = [];
  public showSpinner = true;
    constructor(private serviceProduto: ProdutoService, private serviceCategoria: CategoriaService) { }

  ngOnInit() {
    this.serviceProduto.getAll().subscribe(data => {
      console.log('Dashboard Inicio');
      this.produtos = data;
      this.showSpinner = false;
      console.log(this.produtos);
    });

      this.serviceCategoria.getAll().subscribe( data =>{
              this.categorias = data;
          }
      )
  }

    filtrarCategoria(id){
        if (id in this.filtroCategoria){

        } else{

        }

        this.showSpinner = true;
        this.serviceProduto.getAll()


        this.showSpinner = false;
    }

}
