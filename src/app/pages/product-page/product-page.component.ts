import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { Product } from '../../DTOs/Product';
import { map, Observable, switchMap } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../DTOs/Category';

@Component({
    selector: 'app-product-page',
    standalone: true,
    imports: [RouterLink, CarouselModule],
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
    publicId$: Observable<string>;
    product$: Observable<Product>;
    selectedCategory: Category | undefined;

    constructor(private route: ActivatedRoute, private categoryService: CategoryService, private productService: ProductService) {
        this.selectedCategory = this.categoryService.selectedCategory;
        this.publicId$ = this.route.paramMap.pipe(
            map(params => params.get('public_id') || '-1')
        );

        this.product$ = this.publicId$.pipe(
            switchMap(productId => this.productService.getProductById(productId))
        );

        this.publicId$.subscribe(console.log);
    }
}
