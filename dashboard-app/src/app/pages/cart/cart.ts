import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.html',
})
export class CartComponent {
  private cartService = inject(CartService);

  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  cartItems = this.cartService.cartItems;

  subtotal = this.cartService.subtotal;

  gstAmount = this.cartService.gstAmount;

  finalAmount = this.cartService.finalAmount;

  discount = this.cartService.discount;

  couponCode = '';

  increase(id: number) {
    this.cartService.increaseQuantity(id);
  }

  decrease(id: number) {
    this.cartService.decreaseQuantity(id);
  }

  remove(id: number) {
    this.cartService.removeFromCart(id);

    this.snackBar.open(
      'Item Removed',

      'Close',

      {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      },
    );
  }

  applyCoupon() {
    const result = this.cartService.applyCoupon(this.couponCode);

    this.snackBar.open(
      result.message,

      'Close',

      {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      },
    );
  }
  navigate() {
    this.router.navigate(['/checkout']);
  }
}
