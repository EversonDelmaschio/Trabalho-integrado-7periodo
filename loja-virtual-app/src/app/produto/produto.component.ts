import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Produto } from './produto.model';
import { ProdutoService } from './produto.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../categoria/categoria.service'; 

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  providers: [ProdutoService, CategoriaService],
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  // tslint:disable-next-line:no-trailing-whitespace
  public produto: Produto;
  public categorias = [];
  id: number;
  sub: any;

  constructor(private http: Http, private produtoService: ProdutoService, private route: ActivatedRoute, private  categoriaService: CategoriaService) {
   this.produto = new Produto();

  }

  addImagem(evento) {
  }

  ngOnInit() {
    this.sub== this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
    
    if(this.id > 0){
      this.produtoService.getById(this.id)
      .subscribe(
        _produto => {
          this.produto = _produto;
          console.log(this.produto);
      });
    }
    
    this.categoriaService.getAll().subscribe(data => {
      this.categorias = data;
    });
  }
  

  cadastrar(){
    this.produto.categoria = 1;
    if(this.id == 0){
      this.produtoService.post({produto: this.produto})
      .subscribe(p => {
        console.log('Produto: ', p);
      });
    }
    else{
      this.produtoService.put(this.id, {produto: this.produto})
      .subscribe(p => {
        console.log('Produto: ', p);
      });
    }
      
    }

}
