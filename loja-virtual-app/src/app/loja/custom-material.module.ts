import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatCheckboxModule, MatCardModule
} from '@angular/material';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatCardModule],
    exports: [MatButtonModule, MatCheckboxModule, MatCardModule],
    declarations: [ProdutoDetalheComponent]
})
export class CustomMaterialModule { }
