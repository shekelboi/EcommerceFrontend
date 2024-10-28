import { Component, Input } from '@angular/core';
import { Product } from '../../DTOs/Product';
import { CardModule } from 'primeng/card';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';
import { ImageService } from '../../services/image.service';

@Component({
    selector: 'app-product-grid',
    standalone: true,
    imports: [CardModule, RouterLink, NgFor, AsyncPipe],
    templateUrl: './product-grid.component.html',
    styleUrl: './product-grid.component.css'
})
export class ProductGridComponent {
    @Input({ required: true }) products!: Product[];

    constructor(public imageService: ImageService) { }
}
