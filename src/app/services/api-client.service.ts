import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiClientService {

    BASE_URL = 'http://127.0.0.1:8080/api'

    constructor(protected http: HttpClient) {

    }
}
