import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  api = 'https://fakestoreapi.com/products';

  getProducts() {
    return this.http.get(this.api);
  }

  getProduct(id: number) {
    return this.http.get(`${this.api}/${id}`);
  }

  createProduct(data: any) {
    return this.http.post(this.api, data);
  }

  updateProduct(id: number, data: any) {
    return this.http.put(`${this.api}/${id}`, data);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
