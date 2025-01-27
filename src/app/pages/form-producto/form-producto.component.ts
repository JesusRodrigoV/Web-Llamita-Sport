import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto/producto.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-producto',
  imports: [FormsModule],
  templateUrl: './form-producto.component.html',
  styleUrl: './form-producto.component.scss',
})
export class FormProductoComponent {
  newProduct = { nombre: '', precio: 0, stock: 0 };
  constructor(private productService: ProductoService, private router: Router) {}
  onSubmit() {
    this.productService.createProduct(this.newProduct).subscribe({
      next: () => {
        console.log('Producto agregado exitosamente');
        this.router.navigate(['/inventario']);
        this.resetForm();
      },
      error: (err) => console.error('Error al agregar producto:', err),
    });
  }
  resetForm() {
    this.newProduct = { nombre: '', precio: 0, stock: 0 };
  }
}
