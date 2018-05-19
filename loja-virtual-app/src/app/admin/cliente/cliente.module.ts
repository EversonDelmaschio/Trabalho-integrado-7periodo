import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ClienteComponent } from './cliente.component';
import { ListaClienteComponent } from './lista-cliente.component';
import { ViewClienteComponent } from './view-cliente.component';
import { ClienteRoutingModule } from './cliente.routing.module';
import { HomeModule } from '../home/home.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HomeModule,
        RouterModule,
        ClienteRoutingModule
    ],
    exports: [
        ClienteComponent,
        ListaClienteComponent,
        ViewClienteComponent
    ],
    declarations: [
        ClienteComponent,
        ListaClienteComponent,
        ViewClienteComponent
    ],
    providers: []
})
export class ClienteModule {

}
