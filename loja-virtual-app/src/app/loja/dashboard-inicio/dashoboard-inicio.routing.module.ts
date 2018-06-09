import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuInicioComponent } from '../menu-inicio/menu-inicio.component';
import { DashboardInicioComponent } from './dashboard-inicio.component';
import { SpinnerComponent } from '../../common/spinner/spinner.component';

const dashoboardInicioRouting = [
    {
        path: 'loja', component: MenuInicioComponent, children: [
            { path: '', component: DashboardInicioComponent},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(dashoboardInicioRouting)],
    exports: [RouterModule],
})
export class DasboardInicioRoutingModule {

}
