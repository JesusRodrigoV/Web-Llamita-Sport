import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../services/producto/producto.service';
import { RouterLink } from '@angular/router';
import { FormProductoComponent } from '../form-producto/form-producto.component';

@Component({
  selector: 'app-inventario',
  imports: [HeaderComponent, FooterComponent, CommonModule, RouterLink, FormProductoComponent],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.scss'
})
export class InventarioComponent {
  products: any[] = [];

  newProduct = { nombre: '', precio: 0, stock: 0 };
  constructor(private productService: ProductoService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Error:', err)
    });
  }

  addProduct() {
    const newProduct = { nombre: 'Camiseta', precio: 50, stock: 100 };
    this.productService.createProduct(newProduct).subscribe({
      next: () => this.loadProducts(),
      error: (err) => console.error('Error al agregar producto:', err)
    });
  }

  // Método para actualizar un producto
  updateProduct(product: any) {
    this.productService.updateProduct(product.id, product).subscribe({
      next: () => this.loadProducts(),
      error: (err) => console.error('Error al actualizar producto:', err)
    });
  }

  // Método para eliminar un producto
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe({
      next: () => this.loadProducts(),
      error: (err) => console.error('Error al eliminar producto:', err)
    });
  }
  onSubmit() {
    this.productService.createProduct(this.newProduct).subscribe({
      next: () => {
        console.log('Producto agregado exitosamente');
        this.resetForm();
      }, error: (err) => console.error('Error al agregar producto:', err)
    });
  }
  resetForm() {
    this.newProduct = { nombre: '', precio: 0, stock: 0 };
  }
}
