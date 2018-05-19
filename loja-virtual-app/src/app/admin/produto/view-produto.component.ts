import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Produto } from './produto.model';
import { ProdutoService } from './produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-produto',
  templateUrl: './view-produto.component.html',
  providers: [ ProdutoService ],
  styleUrls: ['./view-produto.component.css']
})
export class ViewProdutoComponent implements OnInit {
  sub: any;
  id: number;
  produto: Produto;
  public mostrarModal = false;
  
  constructor(private http: Http, private produtoService: ProdutoService, private route: ActivatedRoute, private location: Location, private router: Router) {
   this.produto = new Produto();

  }
  
  deletar(){
    this.produtoService.delete(this.id).subscribe(
      _produto => {
        this.mostrarModal = false;
        this.router.navigate(["/lista-produto"]);
    });
  }

  ngOnInit() {
    this.sub== this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
    
    this.produtoService.getById(this.id)
    .subscribe(
      _produto => {
        this.produto = _produto;
        console.log(this.produto);
    });
  }

}
