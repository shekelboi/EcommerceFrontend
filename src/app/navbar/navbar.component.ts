import { Component } from '@angular/core';
import { SiteIdComponent } from "../site-id/site-id.component";
import { CategoriesDropdownComponent } from "../categories-dropdown/categories-dropdown.component";
import { SearchbarComponent } from "../searchbar/searchbar.component";
import { SignInComponent } from "../sign-in/sign-in.component";
import { CartButtonComponent } from "../cart-button/cart-button.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [SiteIdComponent, CategoriesDropdownComponent, SearchbarComponent, SignInComponent, CartButtonComponent]
})
export class NavbarComponent {

}
