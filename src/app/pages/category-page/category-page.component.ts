import { Component } from '@angular/core';
import { TestDataLoaderService } from '../../services/test-data-loader.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {
  categoryId: number = -1;

  constructor(public testDataLoaderService: TestDataLoaderService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.categoryId = parseInt(params['category_id']);
    });
  }
}
