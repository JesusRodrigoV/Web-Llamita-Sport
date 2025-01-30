import { Routes } from "@angular/router";
import { HeaderComponent } from "./components/header";
import { ContactosComponent } from "./pages/contactos";
import { FormProductoComponent } from "./pages/form-producto";
import { HomeComponent } from "./pages/home";
import { InventarioComponent } from "./pages/inventario";
import { PedidosComponent } from "./pages/pedidos";

export const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "home", component: HomeComponent },
	{ path: "header", component: HeaderComponent },
	{ path: "inventario", component: InventarioComponent },
	{ path: "pedidos", component: PedidosComponent },
	{ path: "contactos", component: ContactosComponent },
	{ path: "form-producto", component: FormProductoComponent },
];
