import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { ViewProdutoComponent } from './produto/view-produto.component';
import { ListaProdutoComponent } from './produto/lista-produto.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ClienteComponent } from './cliente/cliente.component';
import { ViewClienteComponent } from './cliente/view-cliente.component';
import { ListaClienteComponent } from './cliente/lista-cliente.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { ListaCategoriaComponent} from './categoria/lista-categoria.component';
import { ViewCategoriaComponent } from './categoria/view-categoria.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { ViewFornecedorComponent } from './fornecedor/view-fornecedor.component';
import { ListaFornecedorComponent } from './fornecedor/lista-fornecedor.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';



const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent, canActivate: [AuthGuardService] },
    {path: 'produto/:id', component: ProdutoComponent, canActivate: [AuthGuardService] },
    {path: 'view-produto/:id', component: ViewProdutoComponent, canActivate: [AuthGuardService]  },
    {path: 'lista-produto', component: ListaProdutoComponent, canActivate: [AuthGuardService]  },
    {path: 'cliente/:id', component: ClienteComponent, canActivate: [AuthGuardService] },
    {path: 'view-cliente/:id', component: ViewClienteComponent, canActivate: [AuthGuardService] },
    {path: 'lista-cliente', component: ListaClienteComponent, canActivate: [AuthGuardService] },
    {path: 'categoria/:id', component: CategoriaComponent, canActivate: [AuthGuardService]  },
    {path: 'lista-categoria',  component: ListaCategoriaComponent, canActivate: [AuthGuardService] },
    {path: 'view-categoria/:id', component: ViewCategoriaComponent, canActivate: [AuthGuardService] },
    {path: 'fornecedor/:id', component: FornecedorComponent, canActivate: [AuthGuardService] },
    {path: 'lista-fornecedor', component: ListaFornecedorComponent, canActivate: [AuthGuardService] },
    {path: 'view-fornecedor/:id', component: ViewFornecedorComponent, canActivate: [AuthGuardService] },
    {path: '**', redirectTo: 'login'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);


