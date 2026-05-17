import { Routes } from '@angular/router';

import { CartComponent } from './pages/cart/cart';
import { ProductDetails } from './pages/product-details/product-details.js';
import { LoginComponent } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { CheckoutComponent } from './pages/checkout/checkout';
import { authGuard } from './guards/auth-guard';
import { ProductsComponent } from './pages/products/products';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },

  {
    path: 'products',
    component: ProductsComponent,
  },

  {
    path: 'product/:id',
    component: ProductDetails,
  },

  {
    path: 'cart',
    component: CartComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'signup',
    component: Signup,
  },

  {
    path: 'checkout',
    component: CheckoutComponent,
    // canActivate: [authGuard]
  },

  {
    path: '**',
    redirectTo: '',
  },
];
