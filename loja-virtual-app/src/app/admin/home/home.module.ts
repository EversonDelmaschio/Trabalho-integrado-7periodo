import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HomeComponent
    ],
    declarations: [
        HomeComponent
    ],
    providers: []
})
export class HomeModule { }
