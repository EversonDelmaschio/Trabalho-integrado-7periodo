import { Component, OnInit } from '@angular/core';
import { FornecedorService  } from './fornecedor.service';
import { Fornecedor } from './fornecedor.model';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  providers: [ FornecedorService ],
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {
  id: number;
  sub: any;
  public fornecedor: Fornecedor;
  
  constructor( private http: Http, private fornecedorService: FornecedorService, private route: ActivatedRoute ) { 
    this.fornecedor = new Fornecedor();
  }

  ngOnInit() {
    this.sub== this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
    
    if(this.id > 0){
      this.fornecedorService.getById(this.id)
      .subscribe(
        _fornecedor => {
          this.fornecedor = _fornecedor;
          console.log(this.fornecedor);
      });
    }  
    
  }
  
  cadastrar(){
    if(this.id == 0){
      this.fornecedorService.post({fornecedor: this.fornecedor}).subscribe(f=>{console.log('fornecedor: ', f)});
    }
    else{
      this.fornecedorService.put(this.id, {fornecedor: this.fornecedor})
      .subscribe(f => {
        console.log('fornecedor: ', f);
      });
    }
  }

}
