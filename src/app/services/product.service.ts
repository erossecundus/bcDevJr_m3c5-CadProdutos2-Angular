import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/products");
  }

  save(product: Product) {
    return this.http.post<Product>("http://localhost:8080/products", product);
  }


}
