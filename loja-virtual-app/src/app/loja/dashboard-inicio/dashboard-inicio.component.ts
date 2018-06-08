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
    console.log('Dashoard Inicio!');
    this.serviceProduto.getAll().subscribe(data => {
      this.produtos = data;
      this.showSpinner = false;
    });
  }

}
