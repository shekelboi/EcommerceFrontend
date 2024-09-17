import { Component } from '@angular/core';
import { TestDataLoaderService } from '../../services/test-data-loader.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {
  categoryId: number = -1;

  constructor(public testDataLoaderService: TestDataLoaderService, private route: ActivatedRoute, public categoryService: CategoryService) {
    this.route.params.subscribe(params => {
      this.categoryId = parseInt(params['category_id']);
    });
    this.categoryService.selectedCategory = this.testDataLoaderService.getCategoryById(this.categoryId);
  }
}
