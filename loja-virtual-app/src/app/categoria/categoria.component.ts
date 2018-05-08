import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria.model';
import { CategoriaService } from './categoria.service';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  providers: [CategoriaService],
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  
  categoria: Categoria;

  constructor(private http: Http, private categoriaService: CategoriaService) {
    this.categoria = new Categoria();
    
  }

  ngOnInit() {
  }
  
  cadastrar(){
    
    this.categoriaService.post({categoria: this.categoria}) .subscribe(c => {
      console.log('categoria: ', c);
    });
  }

}
