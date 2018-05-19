import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaClienteComponent } from './lista-cliente.component';
import { HomeComponent } from '../home/home.component';
import { ViewClienteComponent } from './view-cliente.component';
import { ClienteComponent } from './cliente.component';
import { AuthGuardService } from '../guards/auth-guard.service';

const clienteRouting = [
    {
        path: 'admin', component: HomeComponent, canActivate: [AuthGuardService], children: [
            { path: 'lista-cliente', component: ListaClienteComponent, canActivate: [AuthGuardService] },
            { path: 'cliente/:id', component: ClienteComponent, canActivate: [AuthGuardService] },
            { path: 'view-cliente/:id', component: ViewClienteComponent, canActivate: [AuthGuardService] },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(clienteRouting)],
    exports: [RouterModule]
})
export class ClienteRoutingModule {

}
