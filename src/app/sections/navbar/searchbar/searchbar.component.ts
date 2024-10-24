import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-searchbar',
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './searchbar.component.html',
    styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
    constructor(private router: Router) { }

    searchSubmit(keyword: string) {
        this.router.navigate(['/search'], {
            queryParams: {
                q: keyword
            }
        })
    }
}