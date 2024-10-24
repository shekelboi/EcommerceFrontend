import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Product } from '../../DTOs/Product';
import { ProductGridComponent } from '../../sections/product-grid/product-grid.component';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'app-search-page',
    standalone: true,
    imports: [AsyncPipe, NgIf, ProductGridComponent],
    templateUrl: './search-page.component.html',
    styleUrl: './search-page.component.css'
})
export class SearchPageComponent implements OnDestroy {
    keyword$: Observable<string>;
    products$: Observable<Product[]>;
    products: Product[] = [];

    constructor(private route: ActivatedRoute, private productService: ProductService) {
        this.keyword$ = this.route.queryParamMap.pipe(
            map(params => {
                console.log('Query params: ', params);
                return params.get('q') || '';
            })
        );

        this.products$ = this.keyword$.pipe(
            switchMap(keyword => this.productService.getProductsByKeyword(keyword))
        );

        this.products$.subscribe(products => {
            this.products = products;
        });
    }

    ngOnDestroy(): void {
        // TODO: reset search once this page is destroyed
    }
}
