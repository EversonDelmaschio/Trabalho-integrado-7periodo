import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {ProdutoDetalheComponent} from './produto-detalhe.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
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
