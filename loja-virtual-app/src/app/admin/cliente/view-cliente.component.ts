import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from './cliente.model';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-view-cliente',
  templateUrl: './view-cliente.component.html',
  providers: [ClienteService],
  styleUrls: ['./view-cliente.component.css']
})
export class ViewClienteComponent implements OnInit {
  
  id: number;
  sub: any;

  public cliente: Cliente;

  constructor(private http: Http, private clienteService: ClienteService,  private route: ActivatedRoute) { 
    this.cliente = new Cliente();
    
  }
  
  deletar(){
    this.clienteService.delete(this.id);
  }

  ngOnInit() {
    
    this.sub== this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
    
    if(this.id > 0){
      this.clienteService.getById(this.id)
      .subscribe(
      _cliente => {
        this.cliente = _cliente;
        console.log(this.cliente);
    });
    }
  }

}
