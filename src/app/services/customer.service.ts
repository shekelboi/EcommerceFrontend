import { Injectable } from '@angular/core';
import { ApiClientService } from './api-client.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CustomerService extends ApiClientService {
    public login(email: string, password: string) {
        const params = new HttpParams().set('email', email).set('password', password);
        // Result will have to be set as a cookie for JWT token
        return this.http.post(`${this.BASE_URL}/public/customer/login`, null, { params: params, responseType: 'text' })
    }
}
