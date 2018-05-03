import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ProdutoComponent } from './produto/produto.component';
import { ViewProdutoComponent } from './view-produto/view-produto.component';
import { ListaProdutoComponent } from './produto/lista-produto.component';
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
    HttpModule,
    FormsModule,
    routing
  ],
  exports: [
    ProdutoComponent,
    ViewProdutoComponent,
    ListaProdutoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
