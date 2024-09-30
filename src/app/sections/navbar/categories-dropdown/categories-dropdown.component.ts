import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestDataLoaderService } from '../../../services/test-data-loader.service'
import { Category } from '../../../DTOs/Category';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../services/category.service';


@Component({
    selector: 'app-categories-dropdown',
    standalone: true,
    imports: [DropdownModule, FormsModule, ReactiveFormsModule],
    templateUrl: './categories-dropdown.component.html',
    styleUrl: './categories-dropdown.component.css'
})
export class CategoriesDropdownComponent {
    categories: Category[];
    selectedCategory: Category | undefined = undefined;

    constructor(public testDataLoaderService: TestDataLoaderService, private router: Router, private route: ActivatedRoute, public categoryService: CategoryService) {
        this.categories = this.testDataLoaderService.categories;
        this.selectedCategory = this.categoryService.selectedCategory;
    }

    public onCategoryChanged(category: Category) {
        this.router.navigate(['/category', category.id])
    }
}
