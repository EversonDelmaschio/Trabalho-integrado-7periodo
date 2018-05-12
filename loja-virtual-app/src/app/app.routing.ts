import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { ViewProdutoComponent } from './produto/view-produto.component';
import { ListaProdutoComponent } from './produto/lista-produto.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ClienteComponent } from './cliente/cliente.component';
import { ViewClienteComponent } from  './cliente/view-cliente.component';
import { ListaClienteComponent } from './cliente/lista-cliente.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { ListaCategoriaComponent} from './categoria/lista-categoria.component';
import { ViewCategoriaComponent } from './categoria/view-categoria.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { ViewFornecedorComponent } from  './fornecedor/view-fornecedor.component';
import { ListaFornecedorComponent } from './fornecedor/lista-fornecedor.component';



const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent },
    {path: 'produto/:id', component: ProdutoComponent},
    {path: 'view-produto/:id', component: ViewProdutoComponent },
    {path: 'lista-produto', component: ListaProdutoComponent },
    {path: 'cliente/:id', component: ClienteComponent},
    {path: 'view-cliente/:id', component: ViewClienteComponent},
    {path: 'lista-cliente', component: ListaClienteComponent},
    {path: 'categoria/:id', component: CategoriaComponent },
    {path: 'lista-categoria',  component: ListaCategoriaComponent},
    {path: 'view-categoria/:id', component: ViewCategoriaComponent},
    {path: 'fornecedor/:id', component: FornecedorComponent},
    {path: 'lista-fornecedor', component: ListaFornecedorComponent},
    {path: 'view-fornecedor/:id', component: ViewFornecedorComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);


