import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProdutoComponent } from './produto.component';
import { ListaProdutoComponent } from './lista-produto.component';
import { ViewProdutoComponent } from './view-produto.component';
import { ProdutoRoutingModule } from './produto.routing.module';
import { HomeModule } from '../home/home.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HomeModule,
        RouterModule,
        ProdutoRoutingModule
    ],
    exports: [
        ProdutoComponent,
        ListaProdutoComponent,
        ViewProdutoComponent
    ],
    declarations: [
        ProdutoComponent,
        ListaProdutoComponent,
        ViewProdutoComponent
    ],
    providers: []
})
export class ProdutoModule {

}
