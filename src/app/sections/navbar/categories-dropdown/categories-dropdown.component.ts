import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    categories: Category[] | undefined;
    selectedCategory: Category | undefined = undefined;

    constructor(private router: Router, private route: ActivatedRoute, public categoryService: CategoryService) {
        this.categoryService.getCategories().subscribe(categories => {
            this.categories = categories;
        })
        this.selectedCategory = this.categoryService.selectedCategory;
    }

    public onCategoryChanged(category: Category) {
        this.router.navigate(['/category', category.id])
    }
}
