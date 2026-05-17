import { Component, Input, inject } from '@angular/core';

import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
})
export class ProductCardComponent {
  @Input() product!: Product;

  private cartService = inject(CartService);
  private snackBar = inject(MatSnackBar);

  addToCart() {
    this.cartService.addToCart(this.product);
    this.snackBar.open(
      'Product added successfully. Visit Cart section.',

      'Close',

      {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      },
    );
  }
}
