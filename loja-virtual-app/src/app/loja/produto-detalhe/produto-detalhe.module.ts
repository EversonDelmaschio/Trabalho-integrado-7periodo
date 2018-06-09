import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {ProdutoDetalheComponent} from './produto-detalhe.component';
import { ProdutoDetalheRoutingModule } from './produto-detalhe.routing.module';
// import { SharedModule } from '../../admin/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        // SharedModule,
        ProdutoDetalheRoutingModule
    ],
    exports: [
        ProdutoDetalheComponent
    ],
    declarations: [
        ProdutoDetalheComponent
    ],
    providers: []
})
export class ProdutoDetalheModule {

}
