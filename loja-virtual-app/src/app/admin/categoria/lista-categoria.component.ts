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
  public listaFiltrada = [];
  public paraExcluir: any;
  public filtroNomeCategoria = '';

  constructor(private categoriaService: CategoriaService) {

  }

  ngOnInit() {
    console.log('Lista Categoria Component');
    this.carregar();
  }

  public carregar() {
    this.categoriaService.getAll().subscribe(
      _categorias => {
        this.categorias = _categorias;
        this.listaFiltrada = _categorias;
      });
  }


  public excluir() {
    if (this.paraExcluir) {
      this.categoriaService.delete(this.paraExcluir.id)
        .subscribe(deletado => {
          this.carregar();
        });
    }
  }

  public marcarParaExcluir(item: any) {
    this.paraExcluir = item;
  }

  public buscar() {
    if (this.filtroNomeCategoria) {
      this.listaFiltrada = this.categorias.filter(c => {
        return c.nome.toLowerCase().includes(this.filtroNomeCategoria.toLowerCase());
      });
    } else {
      this.carregar();
    }
  }

}
