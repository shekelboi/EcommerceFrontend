import { Injectable } from '@angular/core';
import { Category } from '../DTOs/Category';
import { HttpClient } from '@angular/common/http';
import { ApiClientService } from './api-client.service';
import { Product } from '../DTOs/Product';

@Injectable({
    providedIn: 'root'
})
export class CategoryService extends ApiClientService {
    selectedCategory: Category | undefined;

    public getCategoryById(categoryId: number) {
        return this.http.get<Category>(`${this.BASE_URL}/public/category/${categoryId}`);
    }

    public getProductsByCategory(category: Category | undefined) {
        return this.http.get<Product[]>(`${this.BASE_URL}/public/category/${category?.id}/products`);
    }

    public getCategories() {
        return this.http.get<Category[]>(`${this.BASE_URL}/public/categories`)
    }
}
