import { Routes } from '@angular/router';
import { HeaderComponent } from './shared/UI/header/header.component'
import { HomeComponent } from './shared/UI//home/home.component';
import { InventarioComponent } from './shared/UI//inventario/inventario.component';
import { PedidosComponent } from './shared/UI//pedidos/pedidos.component';
import { ContactosComponent } from './shared/UI//contactos/contactos.component';


export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'inventario', component: InventarioComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'contactos', component: ContactosComponent },
];
