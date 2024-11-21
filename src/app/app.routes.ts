import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component';
import { InventarioComponent } from './inventario/inventario.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ContactosComponent } from './contactos/contactos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'inventario', component: InventarioComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'contactos', component: ContactosComponent },
];
