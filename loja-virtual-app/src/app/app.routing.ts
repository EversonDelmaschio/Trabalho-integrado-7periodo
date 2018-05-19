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



const APP_ROUTES: Routes = [
    {path: 'admin', component: HomeComponent, canActivate: [AuthGuardService] },
    {path: 'login', component: LoginComponent},
    // {path: 'produto/:id', component: ProdutoComponent, canActivate: [AuthGuardService] },
    // {path: 'view-produto/:id', component: ViewProdutoComponent, canActivate: [AuthGuardService]  },
    // {path: 'lista-produto', component: ListaProdutoComponent, canActivate: [AuthGuardService]  },
    // {path: 'cliente/:id', component: ClienteComponent, canActivate: [AuthGuardService] },
    // {path: 'view-cliente/:id', component: ViewClienteComponent, canActivate: [AuthGuardService] },
    // {path: 'lista-cliente', component: ListaClienteComponent, canActivate: [AuthGuardService] },
    // {path: 'categoria/:id', component: CategoriaComponent, canActivate: [AuthGuardService]  },
    // {path: 'lista-categoria',  component: ListaCategoriaComponent, canActivate: [AuthGuardService] },
    // {path: 'view-categoria/:id', component: ViewCategoriaComponent, canActivate: [AuthGuardService] },
    // {path: 'fornecedor/:id', component: FornecedorComponent, canActivate: [AuthGuardService] },
    // {path: 'lista-fornecedor', component: ListaFornecedorComponent, canActivate: [AuthGuardService] },
    // {path: 'view-fornecedor/:id', component: ViewFornecedorComponent, canActivate: [AuthGuardService] },
    {path: '**', redirectTo: 'login'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);


