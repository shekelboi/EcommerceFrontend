import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestDataLoaderService } from '../../../services/test-data-loader.service'
import { Category } from '../../../DTOs/Category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-dropdown',
  standalone: true,
  imports: [DropdownModule, FormsModule, ReactiveFormsModule],
  templateUrl: './categories-dropdown.component.html',
  styleUrl: './categories-dropdown.component.css'
})
export class CategoriesDropdownComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category | undefined = undefined;

  constructor(public testDataLoaderService: TestDataLoaderService, private router: Router) { 
    this.categories = testDataLoaderService.categories;
  }
  
  ngOnInit(): void {
    // console.log(this.testDataLoaderService.categories[0].name);
  }

  public onCategoryChanged(category: Category) {
    this.router.navigate(['/category', category.id])
  }
}
