import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaProdutoComponent } from './lista-produto.component';
import { HomeComponent } from '../home/home.component';
import { ProdutoComponent } from './produto.component';
import { ViewProdutoComponent } from './view-produto.component';
import { AuthGuardService } from '../guards/auth-guard.service';

const produtoRouting = [
    {
        path: 'admin', component: HomeComponent, canActivate: [AuthGuardService], children: [
            { path: 'produto/:id', component: ProdutoComponent, canActivate: [AuthGuardService] },
            { path: 'view-produto/:id', component: ViewProdutoComponent, canActivate: [AuthGuardService] },
            { path: 'lista-produto', component: ListaProdutoComponent, canActivate: [AuthGuardService] },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(produtoRouting)],
    exports: [RouterModule]
})
export class ProdutoRoutingModule {

}
