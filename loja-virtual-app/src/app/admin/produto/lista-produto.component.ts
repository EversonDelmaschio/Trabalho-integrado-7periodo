import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';
import { CategoriaService } from '../categoria/categoria.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: 'lista-produto.component.html',
  providers: [ProdutoService, CategoriaService],
  styleUrls: ['lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  public produtos: Array<any>;
  public listaFiltrada = [];
  public paraExcluir: any;
  public filtroNomeProduto = '';
  public categorias: Array<any>;
  public categoriaAtual: any;

  constructor(private produtoService: ProdutoService, private categoriaService: CategoriaService) { }

  ngOnInit() {
    console.log('Lista Produto Component');
    this.carregar();
  }

  public carregar() {
    this.produtoService.getAll()
      .subscribe(
        _produtos => {
          this.produtos = _produtos;
          this.listaFiltrada = _produtos;
        });
    this.categoriaService.getAll().subscribe(
      _categorias => {
        this.categorias = _categorias;
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

  public buscar() {
    if (this.filtroNomeProduto) {
      this.listaFiltrada = this.produtos.filter(x => {
        return x.nome.toLowerCase().includes(this.filtroNomeProduto.toLowerCase());
      });
    } else {
      this.carregar();
    }
  }

}
