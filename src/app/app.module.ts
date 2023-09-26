import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CicloVidaComponent } from './components/ciclo-vida/ciclo-vida.component';
import { ClientesService } from './services/clientes.service';
import { CategoriasService } from './services/categorias.service';
import { ProductosService } from './services/productos.service';
import { PedidosService } from './services/pedidos.service';
import { HttpClientModule } from '@angular/common/http';
import { NuevoClienteComponent } from './components/clientes/nuevo-cliente/nuevo-cliente.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthReducer } from './ngrx/reducers/auth.reducers';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriasComponent,
    ClientesComponent,
    ProductosComponent,
    PedidosComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    CicloVidaComponent,
    NuevoClienteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(
      {userStore: AuthReducer},
      {runtimeChecks: {strictActionImmutability: true, strictStateImmutability: true}}
    ),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [ClientesService, CategoriasService, ProductosService, PedidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
