import { Injectable } from '@angular/core';
import { Category } from '../DTOs/Category';
import categories from '../../assets/data/categories.json';

@Injectable({
  providedIn: 'root'
})
export class TestDataLoaderService {
  categories: Category[];

  constructor() {
    this.categories = categories;
    this.categories.sort((a, b) => a.name.localeCompare(b.name))
  }

  public getCategoryById(categoryId: number) {
    return this.categories.find(category => category.id == categoryId);
  }
}
