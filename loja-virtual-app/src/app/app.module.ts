import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ProdutoComponent } from './produto/produto.component';
import { ViewProdutoComponent } from './view-produto/view-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ProdutoComponent,
    ViewProdutoComponent,
    ListaProdutoComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
