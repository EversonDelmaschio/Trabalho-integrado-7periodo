import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria.model';
import { CategoriaService } from './categoria.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './view-categoria.component.html',
  providers: [CategoriaService],
  styleUrls: ['./view-categoria.component.css']
})
export class ViewCategoriaComponent implements OnInit {
id: number;
  sub: any;
  
  public categoria: Categoria;

  constructor(private http: Http, private categoriaService: CategoriaService, private route: ActivatedRoute) {
    this.categoria = new Categoria();
    
  }
  
  deletar(){
    this.categoriaService.delete(this.id);
  }

  ngOnInit() {
    
    this.sub== this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
    
    if(this.id > 0){
      this.categoriaService.getById(this.id)
      .subscribe(
      _categoria => {
        this.categoria = _categoria;
        console.log(this.categoria);
    });
    }
  }
  

}