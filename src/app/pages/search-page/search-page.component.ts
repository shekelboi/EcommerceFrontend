import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
    selector: 'app-search-page',
    standalone: true,
    imports: [AsyncPipe, NgIf],
    templateUrl: './search-page.component.html',
    styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
    keyword$: Observable<string>;

    constructor(private route: ActivatedRoute) {
        this.keyword$ = this.route.queryParamMap.pipe(
            map(params => {
                console.log('Query params: ', params);
                return params.get('q') || '';
            })
        );
    }
}
