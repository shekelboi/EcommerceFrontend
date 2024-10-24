import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SubjectBrokerService } from '../../../services/subject-broker.service';

@Component({
    selector: 'app-searchbar',
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './searchbar.component.html',
    styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
    @ViewChild('keywordInput') keywordInput!: ElementRef;

    constructor(private router: Router, private subjectBrokerService: SubjectBrokerService) {
        this.subjectBrokerService.setValueOfSearchInput.subscribe((text) => {
            this.keywordInput.nativeElement.value = text;
        });
    }

    searchSubmit(keyword: string) {
        this.router.navigate(['/search'], {
            queryParams: {
                q: keyword
            }
        })
    }
}