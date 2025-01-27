import { Routes } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { FormProductoComponent } from './pages/form-producto/form-producto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'inventario', component: InventarioComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'form-producto', component: FormProductoComponent },
];
