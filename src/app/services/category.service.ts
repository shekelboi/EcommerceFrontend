import { Injectable } from '@angular/core';
import { Category } from '../DTOs/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  selectedCategory: Category | undefined;
  constructor() { }
}
