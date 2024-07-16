import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  title = 'Formulário de Cadastro:';

  @Input()
  categories : Category[] = [];

  @Input()
  product ?: Product;

  @Output()
  saveEmitter = new EventEmitter();

  save() {
    this.saveEmitter.emit(true);
  }

  cancel() {
    this.saveEmitter.emit();
  }

  constructor() {}

  ngOnInit() : void {}

}
