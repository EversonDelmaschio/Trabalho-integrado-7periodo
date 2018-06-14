import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './admin/produto/produto.component';
import { ViewProdutoComponent } from './admin/produto/view-produto.component';
import { ListaProdutoComponent } from './admin/produto/lista-produto.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ClienteComponent } from './admin/cliente/cliente.component';
import { ViewClienteComponent } from './admin/cliente/view-cliente.component';
import { ListaClienteComponent } from './admin/cliente/lista-cliente.component';
import { CategoriaComponent } from './admin/categoria/categoria.component';
import { HomeComponent } from './admin/home/home.component';
import { ListaCategoriaComponent} from './admin/categoria/lista-categoria.component';
import { ViewCategoriaComponent } from './admin/categoria/view-categoria.component';
import { FornecedorComponent } from './admin/fornecedor/fornecedor.component';
import { ViewFornecedorComponent } from './admin/fornecedor/view-fornecedor.component';
import { ListaFornecedorComponent } from './admin/fornecedor/lista-fornecedor.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthGuardService } from './admin/guards/auth-guard.service';
import { MenuInicioComponent } from './loja/menu-inicio/menu-inicio.component';
import {ProdutoDetalheComponent} from './loja/produto-detalhe/produto-detalhe.component';
import {CarrinhoComponent} from './loja/carrinho/carrinho.component';



const APP_ROUTES: Routes = [
    {path: '', redirectTo: 'loja', pathMatch: 'full'},
    {path: 'loja', component: MenuInicioComponent},
    {path: 'admin', component: HomeComponent, canActivate: [AuthGuardService] },
        //{path: 'produto-detalhe/:id', component: ProdutoDetalheComponent},
    {path: 'login', component: LoginComponent},
    {path: 'carrinho', component: CarrinhoComponent},
    {path: '**', redirectTo: 'login'} // rever

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);


