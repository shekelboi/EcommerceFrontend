import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-searchbar',
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './searchbar.component.html',
    styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {

}