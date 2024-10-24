import { Component } from '@angular/core';
import { ActivatedRoute, EventType, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from "./sections/footer/footer.component";
import { NavbarComponent } from './sections/navbar/navbar.component';
import { CategoriesDropdownComponent } from './sections/navbar/categories-dropdown/categories-dropdown.component';
import { SearchbarComponent } from './sections/navbar/searchbar/searchbar.component';
import { SignInComponent } from './sections/navbar/sign-in/sign-in.component';
import { SubjectBrokerService } from './services/subject-broker.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ButtonModule, RouterLink, NavbarComponent, CategoriesDropdownComponent, SearchbarComponent, SignInComponent, FooterComponent]
})
export class AppComponent {
    title = 'EcommerceFrontend';

    constructor(private router: Router, private subjectBrokerService: SubjectBrokerService) {
        this.router.events.subscribe((event) => {
            if (event.type == EventType.NavigationStart) {
                const parsedUrl = this.router.parseUrl(event.url);
                parsedUrl.queryParams = {};
                console.log(parsedUrl.toString());
                if (parsedUrl.toString() != '/search') {
                    this.subjectBrokerService.setValueOfSearchInput.next('');
                }
            }
        });
    }
}
