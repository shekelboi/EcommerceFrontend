import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from "./navbar/navbar.component";
import { CategoriesDropdownComponent } from "./categories-dropdown/categories-dropdown.component";
import { SearchbarComponent } from "./searchbar/searchbar.component";
import { SignInComponent } from "./sign-in/sign-in.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ButtonModule, RouterLink, NavbarComponent, CategoriesDropdownComponent, SearchbarComponent, SignInComponent]
})
export class AppComponent {
  title = 'EcommerceFrontend';
}
