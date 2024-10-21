import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { TestDataLoaderService } from '../../services/test-data-loader.service';
import { Product } from '../../DTOs/Product';
import { Category } from '../../DTOs/Category';

@Component({
    selector: 'app-product-page',
    standalone: true,
    imports: [RouterLink, CarouselModule],
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
    productId: number = -1;
    product: Product | undefined;
    category: Category | undefined;

    constructor(public testDataLoaderService: TestDataLoaderService, private route: ActivatedRoute, public categoryService: CategoryService) {
        this.route.params.subscribe(params => {
            this.productId = parseInt(params['product_id']);
            this.product = this.testDataLoaderService.getProductById(this.productId);
            this.category = this.product != undefined ? this.testDataLoaderService.getCategoryById(this.product.categoryId) : undefined;
            console.log(this.product, "product found")
        });
    }
}
