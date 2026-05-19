import { Component, inject, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.html',
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductService);

  // products: any[] = [];
  products$!: Observable<any[]>;
  

  ngOnInit(): void {
    // this.productService.getProducts().subscribe((res: any) => {
    //   this.products = res;
    // });
    this.products$=this.productService.getProducts();
  }
}
