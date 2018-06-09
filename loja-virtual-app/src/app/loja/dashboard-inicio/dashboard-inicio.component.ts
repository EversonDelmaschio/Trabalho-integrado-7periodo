import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../admin/produto/produto.service';

@Component({
  selector: 'app-dashboard-inicio',
  templateUrl: './dashboard-inicio.component.html',
  styleUrls: ['./dashboard-inicio.component.css']
})
export class DashboardInicioComponent implements OnInit {

  public produtos = [];
  public showSpinner = true;
  constructor(private serviceProduto: ProdutoService) { }

  ngOnInit() {
    this.serviceProduto.getAll().subscribe(data => {
      console.log('Dashboard Inicio');
      this.produtos = data;
      this.showSpinner = false;
    });
  }

}
