import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Cliente } from './cliente.model';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  providers: [ClienteService],
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  
  public cliente: Cliente;
  

  constructor(private http: Http, private clienteService: ClienteService) { 
    this.cliente = new Cliente();
  }

  ngOnInit() {
  }
  
  cadastrar() {
    this.clienteService.post({cliente: this.cliente})
    .subscribe(c => {
      console.log('Cliente: ', c);
    });
  }

}
