import { Component } from '@angular/core';
import { TestDataLoaderService } from '../../services/test-data-loader.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { CardModule } from 'primeng/card';
import { Product } from '../../DTOs/Product';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-category-page',
    standalone: true,
    imports: [CardModule, NgFor, RouterLink],
    templateUrl: './category-page.component.html',
    styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {
    categoryId: number = -1;
    productsInCategory: Product[] = [];

    constructor(public testDataLoaderService: TestDataLoaderService, private route: ActivatedRoute, public categoryService: CategoryService) {
        this.route.params.subscribe(params => {
            this.categoryId = parseInt(params['category_id']);
            this.categoryService.selectedCategory = this.testDataLoaderService.getCategoryById(this.categoryId);
            this.productsInCategory = this.testDataLoaderService.getProductsByCategory(this.categoryService.selectedCategory);
            console.log(this.productsInCategory, "products in category")
        });
    }
}
