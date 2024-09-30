import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-cart-button',
    standalone: true,
    imports: [ButtonModule, RouterLink],
    templateUrl: './cart-button.component.html',
    styleUrl: './cart-button.component.css'
})
export class CartButtonComponent {

}
