import { Injectable } from '@angular/core';
import { Category } from '../DTOs/Category';
import categories from '../../assets/data/categories.json';
import { Product } from '../DTOs/Product';
import products from '../../assets/data/products.json';

@Injectable({
  providedIn: 'root'
})
export class TestDataLoaderService {
  categories: Category[];
  products: Product[];

  constructor() {
    this.categories = categories;
    this.categories.sort((a, b) => a.name.localeCompare(b.name))
    this.products = products;
  }

  public getCategoryById(categoryId: number) {
    return this.categories.find(category => category.id == categoryId);
  }

  public getProductsByCategory(category: Category | undefined) {
    return products.filter(prod => prod.categoryId == category?.id);
  }
}
