import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DasboardInicioRoutingModule } from './dashoboard-inicio.routing.module';
import { DashboardInicioComponent } from './dashboard-inicio.component';
import { MenuInicioModule } from '../menu-inicio/menu-inicio.module';
import { SharedModule } from '../../admin/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MenuInicioModule,
        SharedModule,
        DasboardInicioRoutingModule
    ],
    exports: [
        DashboardInicioComponent,
    ],
    declarations: [
        DashboardInicioComponent
    ],
    providers: []
})
export class DashboardInicioModule {

}
