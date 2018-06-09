import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuInicioComponent } from '../menu-inicio/menu-inicio.component';
import { ProdutoDetalheComponent } from './produto-detalhe.component';

const produtoDetalheRouting = [
    {
        path: 'loja', component: MenuInicioComponent, children: [
            { path: 'produto-detalhe/:id', component: ProdutoDetalheComponent },
        ]
    },
];


@NgModule({
    imports: [RouterModule.forChild(produtoDetalheRouting)],
    exports: [RouterModule],
})
export class ProdutoDetalheRoutingModule {

}
