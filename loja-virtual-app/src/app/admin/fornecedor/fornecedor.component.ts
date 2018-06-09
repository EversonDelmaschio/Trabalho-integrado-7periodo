import { Component, OnInit } from '@angular/core';
import { FornecedorService  } from './fornecedor.service';
import { Fornecedor } from './fornecedor.model';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor( private http: Http, private fornecedorService: FornecedorService,
    private route: ActivatedRoute, public toastr: ToastrService,
              private router: Router) {
    this.fornecedor = new Fornecedor();
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

  cadastrar() {
    if (this.id === 0) {
      this.fornecedorService.post({fornecedor: this.fornecedor}).subscribe(f => {
        this.fornecedor = new Fornecedor();
        this.toastr.success('Fornecedor cadastrado com sucesso!', 'Sucesso!');
      });
    } else {
      this.fornecedorService.put(this.id, {fornecedor: this.fornecedor})
      .subscribe(f => {
        this.toastr.success('Fornecedor atualizado com sucesso!', 'Sucesso!');
        this.router.navigate(['lista-fornecedor']);
      });
    }
  }

}
