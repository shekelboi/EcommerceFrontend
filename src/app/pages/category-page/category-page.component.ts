import { Component } from '@angular/core';
import { TestDataLoaderService } from '../../services/test-data-loader.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { CardModule } from 'primeng/card';
import { Product } from '../../DTOs/Product';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { map, mergeMap, Observable, of, switchMap, tap } from 'rxjs';
import { Category } from '../../DTOs/Category';
import { ThisReceiver } from '@angular/compiler';
import { error } from 'console';

@Component({
    selector: 'app-category-page',
    standalone: true,
    imports: [CardModule, NgFor, NgIf, RouterLink, AsyncPipe],
    templateUrl: './category-page.component.html',
    styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {
    // categoryId: number = -1;

    categoryId$: Observable<number>;
    selectedCategory$: Observable<Category>;
    productsInCategory: Product[] = [];

    constructor(public testDataLoaderService: TestDataLoaderService, private route: ActivatedRoute, public categoryService: CategoryService) {
        console.log('Constructor loaded');
        this.categoryId$ = this.route.paramMap.pipe(
            map(params => {
                console.log('Params changed: ', params);
                return parseInt(params.get('category_id') || '-1');
            })
        );



        this.selectedCategory$ = this.categoryId$.pipe(
            switchMap(categoryId => {
                return this.categoryService.getCategoryById(categoryId)
            })
        );

        this.selectedCategory$.subscribe(selectedCategory => {
            console.log('Selected category:', selectedCategory);
            this.categoryService.selectedCategory = selectedCategory;
            this.categoryService.getProductsByCategory(selectedCategory).subscribe(products => {
                console.log(selectedCategory);
                this.productsInCategory = products;
                console.log(`Products in (${selectedCategory.name}) ${products}`);
            })
        })
    }
}
