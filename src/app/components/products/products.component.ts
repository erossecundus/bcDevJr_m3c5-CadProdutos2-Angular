import { Component } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  title = 'Produtos Cadastrados:';

  categories: Category[] = [];

  product: Product = {} as Product;
  products: Product[] = [];

  showForm : boolean = false;

  constructor(private categoryService: CategoryService,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe({
      next: data => { this.categories = data }
    });
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: data => { this.products = data }
    });
  }


  saveProduct(save: boolean) {
    if(save) {
      this.productService.save(this.product).subscribe({
        next: data => {
          this.products.push(data);
        }
      });
    }
    this.product = {} as Product;
    this.showForm = false;
  }

  create() {
    this.showForm = true;
  }
}
