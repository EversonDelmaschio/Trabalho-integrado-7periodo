import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  providers: [CategoriaService],
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {
  
  public categorias: Array<any>;
  
  constructor(private categoriaService: CategoriaService ) { 
    
  }

  ngOnInit() {
    this.categoriaService.getAll().subscribe(
      _categorias => {
        this.categorias = _categorias;
        console.log(this.categorias);
    });
  }

}
