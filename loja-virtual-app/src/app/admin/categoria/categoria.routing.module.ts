import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaCategoriaComponent } from './lista-categoria.component';
import { HomeComponent } from '../home/home.component';
import { ViewCategoriaComponent } from './view-categoria.component';
import { CategoriaComponent } from './categoria.component';
import { AuthGuardService } from '../guards/auth-guard.service';

const categoriaRouting = [
    {
        path: 'admin', component: HomeComponent, canActivate: [AuthGuardService], children: [
            { path: 'lista-categoria', component: ListaCategoriaComponent, canActivate: [AuthGuardService] },
            { path: 'categoria/:id', component: CategoriaComponent, canActivate: [AuthGuardService] },
            { path: 'view-categoria/:id', component: ViewCategoriaComponent, canActivate: [AuthGuardService] },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(categoriaRouting)],
    exports: [RouterModule]
})
export class CategoriaRoutingModule {

}
