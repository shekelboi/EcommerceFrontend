import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { Button, ButtonModule } from 'primeng/button';
import { CustomerService } from '../../services/customer.service';
import { catchError, tap } from 'rxjs';

@Component({
    selector: 'app-sign-in-page',
    standalone: true,
    imports: [InputTextModule, ButtonModule],
    templateUrl: './sign-in-page.component.html',
    styleUrl: './sign-in-page.component.css'
})
export class SignInPageComponent {
    constructor(private customerService: CustomerService) { }

    login(email: string, password: string) {
        console.log(`Attempting to login using ${email} and ${password}`)
        this.customerService.login(email, password).pipe(
            tap(result => {
                console.log(result);
            }),
            catchError(err => {
                console.log(err);
                throw err;
            })
        ).subscribe();
    }
}
