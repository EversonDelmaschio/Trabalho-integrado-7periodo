import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Produto } from '../../admin/produto/produto.model';
import { ProdutoService } from '../../admin/produto/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../admin/categoria/categoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  providers: [ProdutoService],
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  public produtos: Array<any>;
  public listaFiltrada = [];
  public paraExcluir: any;
  public filtroNomeProduto = '';
  public categorias: Array<any>;
  public categoriaAtual: any;
  public quantidadeSelecionada: number = 1;
  public subtotal : number;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.carregar();
  }
  public carregar() {
    this.produtoService.getAll()
      .subscribe(
        _produtos => {
          this.produtos = _produtos;
          this.listaFiltrada = _produtos;
          this.calculaSubtotal();
        });
  }

  public excluir() {
    if (this.paraExcluir) {
      this.produtoService.delete(this.paraExcluir.id)
        .subscribe(deletado => {
          this.carregar();
          console.log('Produto deletado com sucesso!!');
        });
    }
  }

  public marcarParaExcluir(produto: any) {
    this.paraExcluir = produto;
  }
  
  public calculaSubtotal(){
    this.subtotal = 0;
    for (var i=0; i < this.listaFiltrada.length; i++){
      this.subtotal += (this.listaFiltrada[i].quantidade*this.listaFiltrada[i].venda);
      console.log(this.subtotal);
    }
  }
  
  

}
