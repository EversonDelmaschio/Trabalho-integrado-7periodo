import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from './cliente.model';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  providers: [ClienteService],
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  id: number;
  sub: any;

  public cliente: Cliente;

  constructor(private http: Http, private clienteService: ClienteService,  private route: ActivatedRoute) {
    this.cliente = new Cliente();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
       if (this.id) {
         this.carregar();
       }
    });
  }

  carregar() {
    this.clienteService.getById(this.id)
        .subscribe(_cliente => {
          this.cliente = _cliente;
      });
  }

  cadastrar() {
    if (this.id > 0) {
      this.clienteService.put(this.id, {cliente: this.cliente})
      .subscribe(c => {
        console.log('Cliente atualizado!', c);
      });
    } else {
      this.clienteService.post({cliente: this.cliente})
      .subscribe(c => {
        console.log('Cliente criado: ', c);
      });
    }
  }

}
