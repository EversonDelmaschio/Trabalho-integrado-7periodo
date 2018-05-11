import { Component, OnInit } from '@angular/core';
import { FornecedorService  } from './fornecedor.service';
import { Fornecedor } from './fornecedor.model';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  providers: [ FornecedorService ],
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {
  
  fornecedor: Fornecedor;
  
  constructor( private http: Http, private fornecedorService: FornecedorService ) { 
    this.fornecedor = new Fornecedor();
  }

  ngOnInit() {
    this.fornecedorService.post({fornecedor: this.fornecedor}).subscribe(f=>{console.log('fornecedor: ', f)});
  }

}
