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
  
  constructor(private clienteService: ClienteService) { 
    
  }

  ngOnInit() {
    
    this.clienteService.getAll().subscribe(
      _clientes => {
        this.clientes = _clientes;
        console.log(this.clientes);
    })
  }

}
