import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<any[]>([]);

  discount = signal(0);

  gstPercentage = 18;

  addToCart(product: any) {
    const existing = this.cartItems().find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;

      this.cartItems.set([...this.cartItems()]);
    } else {
      this.cartItems.set([
        ...this.cartItems(),
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  }

  increaseQuantity(id: number) {
    const updated = this.cartItems().map((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }

      return item;
    });

    this.cartItems.set(updated);
  }

  decreaseQuantity(id: number) {
    const updated = this.cartItems().map((item) => {
      if (item.id === id && item.quantity > 1) {
        item.quantity -= 1;
      }

      return item;
    });

    this.cartItems.set(updated);
  }

  removeFromCart(id: number) {
    this.cartItems.set(this.cartItems().filter((item) => item.id !== id));
  }

  subtotal() {
    return this.cartItems().reduce(
      (total, item) => {
        return total + item.price * item.quantity;
      },

      0,
    );
  }

  gstAmount = computed(() => {
    return (this.subtotal() * this.gstPercentage) / 100;
  });

  finalAmount = computed(() => {
    return this.subtotal() + this.gstAmount() - this.discount();
  });

  applyCoupon(code: string) {
    if (code === 'SAVE10' && this.subtotal() >= 1000) {
      this.discount.set(100);

      return {
        success: true,
        message: 'Coupon Applied',
      };
    } else {
      return {
        success: false,
        message: 'Invalid Coupon',
      };
    }
  }
}
