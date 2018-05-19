import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FornecedorComponent } from './fornecedor.component';
import { ListaFornecedorComponent } from './lista-fornecedor.component';
import { ViewFornecedorComponent } from './view-fornecedor.component';
import { FornecedorRoutingModule } from './fornecedor.routing.module';
import { HomeModule } from '../home/home.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HomeModule,
        RouterModule,
        FornecedorRoutingModule
    ],
    exports: [
        FornecedorComponent,
        ListaFornecedorComponent,
        ViewFornecedorComponent
    ],
    declarations: [
        FornecedorComponent,
        ListaFornecedorComponent,
        ViewFornecedorComponent
    ],
    providers: []
})
export class FornecedorModule {

}
