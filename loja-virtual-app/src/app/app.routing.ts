import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { ViewProdutoComponent } from './view-produto/view-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';


const APP_ROUTES: Routes = [
    {path: '', component: ListaProdutoComponent },
    {path: 'produto', component: ProdutoComponent },
    {path: 'view-produto', component: ViewProdutoComponent },
    {path: 'lista-produto', component: ListaProdutoComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);


