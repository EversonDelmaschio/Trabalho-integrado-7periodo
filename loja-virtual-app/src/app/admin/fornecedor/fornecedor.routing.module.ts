import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaFornecedorComponent } from './lista-fornecedor.component';
import { HomeComponent } from '../home/home.component';
import { ViewFornecedorComponent } from './view-fornecedor.component';
import { FornecedorComponent } from './fornecedor.component';
import { AuthGuardService } from '../guards/auth-guard.service';

const fornecedorRouting = [
    {
        path: 'admin', component: HomeComponent, canActivate: [AuthGuardService], children: [
            { path: 'lista-fornecedor', component: ListaFornecedorComponent, canActivate: [AuthGuardService] },
            { path: 'fornecedor/:id', component: FornecedorComponent, canActivate: [AuthGuardService] },
            { path: 'view-fornecedor/:id', component: ViewFornecedorComponent, canActivate: [AuthGuardService] },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(fornecedorRouting)],
    exports: [RouterModule]
})
export class FornecedorRoutingModule {

}
