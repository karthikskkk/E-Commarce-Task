import { Component, inject, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.html',
})
export class ProductDetails implements OnInit {
  private route = inject(ActivatedRoute);

  private productService = inject(ProductService);

  product: any;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProduct(id).subscribe((res) => {
      this.product = res;
    });
  }
}
