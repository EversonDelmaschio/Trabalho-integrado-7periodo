import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CategoriaComponent } from './categoria.component';
import { ListaCategoriaComponent } from './lista-categoria.component';
import { ViewCategoriaComponent } from './view-categoria.component';
import { CategoriaRoutingModule } from './categoria.routing.module';
import { HomeModule } from '../home/home.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HomeModule,
        RouterModule,
        CategoriaRoutingModule
    ],
    exports: [
        CategoriaComponent,
        ListaCategoriaComponent,
        ViewCategoriaComponent
    ],
    declarations: [
        CategoriaComponent,
        ListaCategoriaComponent,
        ViewCategoriaComponent
    ],
    providers: []
})
export class CategoriaModule {

}
