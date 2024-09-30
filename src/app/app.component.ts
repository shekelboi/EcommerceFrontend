import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from "./sections/footer/footer.component";
import { NavbarComponent } from './sections/navbar/navbar.component';
import { CategoriesDropdownComponent } from './sections/navbar/categories-dropdown/categories-dropdown.component';
import { SearchbarComponent } from './sections/navbar/searchbar/searchbar.component';
import { SignInComponent } from './sections/navbar/sign-in/sign-in.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ButtonModule, RouterLink, NavbarComponent, CategoriesDropdownComponent, SearchbarComponent, SignInComponent, FooterComponent]
})
export class AppComponent {
  title = 'EcommerceFrontend';
}
