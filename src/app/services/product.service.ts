import { Injectable } from '@angular/core';
import { ApiClientService } from './api-client.service';
import { Product } from '../DTOs/Product';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService extends ApiClientService {
    public getProductById(publicId: string): Observable<Product> {
        return this.http.get<Product>(`${this.BASE_URL}/products/${publicId}`);
    }
    public getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.BASE_URL}/products`);
    }
    public getProductsByKeyword(keyword: string): Observable<Product[]> {
        const params = new HttpParams({ fromObject: { keyword: keyword } });
        return this.http.get<Product[]>(`${this.BASE_URL}/products`, { params: params });
    }
}
