import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  providers: [ClienteService],
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {
  
  public clientes: Array<any>;
  public listaFiltrada = [];
  public filtroNome = "";
  
  constructor(private clienteService: ClienteService) { 
    
  }

  ngOnInit() {
    this.carregar();
  }
  
  public carregar(){
    this.clienteService.getAll().subscribe(
      _clientes => {
        this.clientes = _clientes;
        this.listaFiltrada = _clientes;
    });
  }
  
  public buscar(){
    if(this.filtroNome){
      this.listaFiltrada = this.clientes.filter(c => {
        return c.nome.toLowerCase().includes(this.filtroNome.toLowerCase());
      });
    }else{
      this.carregar();
    }
  }

}
