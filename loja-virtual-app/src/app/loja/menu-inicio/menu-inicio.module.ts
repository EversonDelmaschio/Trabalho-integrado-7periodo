import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuInicioComponent } from './menu-inicio.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        MenuInicioComponent
    ],
    declarations: [
        MenuInicioComponent
    ],
    providers: []
})
export class MenuInicioModule {

}
