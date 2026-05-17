import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Router, RouterLink } from '@angular/router';

import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './checkout.html',
})
export class CheckoutComponent {
  private cartService = inject(CartService);

  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  cartItems = this.cartService.cartItems;

  subtotal = this.cartService.subtotal;

  gstAmount = this.cartService.gstAmount;

  discount = this.cartService.discount;

  finalAmount = this.cartService.finalAmount;

  orderPlaced() {
    this.snackBar.open(
      'your order has been placed successfully',

      'Close',

      {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      },
    );
    this.router.navigate(['/products']);
  }
}
