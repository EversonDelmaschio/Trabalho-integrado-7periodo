import { Router, RouterModule } from '@angular/router';
import { fakeAsync, inject, TestBed } from '@angular/core/testing';
import { HttpModule, XHRBackend, ResponseOptions, Response, RequestMethod, Http, RequestOptions, Headers } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing/mock_backend';
import { Produto } from './produto.model';
import { ProdutoService } from './produto.service';

describe('Suíte de testes do serviço de produto', () => {
 
  let produto: Produto;
  let produtoVerifica: Produto;
  

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ProdutoService, Http, {
          provide: XHRBackend,
          useClass: MockBackend
        }]
    });
 
    produto = new Produto();
    produtoVerifica = new Produto();
 
    produto.nome = "teste1";
  });
 
  it ('deve CADASTRAR um produto', inject([ProdutoService, Http], 
  (produtoService: ProdutoService, http: Http, ) => {
    produtoService.post(produto)
	
	  produtoService.getById(1)
      .subscribe(
        _produto => {
          produtoVerifica = _produto;
      });
 
    expect(produtoVerifica).toBeDefined();
    expect(produtoVerifica.nome).toEqual(produto.nome);
  }));
  
});