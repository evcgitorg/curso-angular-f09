import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CicloVidaComponent } from './components/ciclo-vida/ciclo-vida.component';
import { NuevoClienteComponent } from './components/clientes/nuevo-cliente/nuevo-cliente.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path:'home', component: HomeComponent },
      {path:'categorias', component: CategoriasComponent },
      {path:'clientes', component: ClientesComponent },
      {path:'clientes/nuevo', component: NuevoClienteComponent },
      {path:'pedidos', component: PedidosComponent },
      {path:'productos', component: ProductosComponent },
      {path:'ciclo-vida', component: CicloVidaComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
