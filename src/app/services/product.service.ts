import { Injectable } from '@angular/core';
import { ApiClientService } from './api-client.service';
import { Product } from '../DTOs/Product';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService extends ApiClientService {

    public getProductById(publicId: string): Observable<Product> {
        return this.http.get<Product>(`${this.BASE_URL}/product/${publicId}`);
    }
}
