import { Component, inject, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.html',
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductService);

  products: any[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res: any) => {
      this.products = res;
    });
  }
}
