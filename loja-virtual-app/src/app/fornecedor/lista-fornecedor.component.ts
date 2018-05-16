import { Component, OnInit } from '@angular/core';
import { FornecedorService } from './fornecedor.service';

@Component({
  selector: 'app-lista-fornecedor',
  templateUrl: './lista-fornecedor.component.html',
  styleUrls: ['./lista-fornecedor.component.css'],
  providers: [FornecedorService]
})
export class ListaFornecedorComponent implements OnInit {

  public fornecedores = [];
  public paraExcluir: any;

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit() {
    this.carregar();
  }
  
  public carregar(){
    this.fornecedorService.getAll().subscribe(data => {
      this.fornecedores = data;
      console.log(data);
    });
  }
  
  public excluir(){
    if(this.paraExcluir){
      this.fornecedorService.delete(this.paraExcluir.id)
        .subscribe(deletado => {
          this.carregar();
        });
    }
  }
  
  public marcarParaExcluir(item: any){
    this.paraExcluir = item;
  }

}
