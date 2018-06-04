import { Component, OnInit } from '@angular/core';
import { FornecedorService  } from './fornecedor.service';
import { Fornecedor } from './fornecedor.model';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-fornecedor',
  templateUrl: './view-fornecedor.component.html',
  providers: [ FornecedorService ],
  styleUrls: ['./view-fornecedor.component.css']
})
export class ViewFornecedorComponent implements OnInit {
  public id: number;
  public sub: any;
  public mostrarModal = false;
  fornecedor: Fornecedor;

  constructor( private http: Http, private fornecedorService: FornecedorService, private route: ActivatedRoute, private router: Router) {
    this.fornecedor = new Fornecedor;
  }

  deletar() {
    this.fornecedorService.delete(this.id).subscribe(
      _fornecedor => {
        this.mostrarModal = false;
        this.router.navigate(['/lista-fornecedor']);
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.carregar();
    });
  }

  carregar() {
    if (this.id > 0) {
      this.fornecedorService.getById(this.id)
      .subscribe(
        _fornecedor => {
          this.fornecedor = _fornecedor;
      });
    }
  }

}
