import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'sign_in',
        component: SignInPageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'category/:category_id',
        component: CategoryPageComponent
    },
    {
        path: 'product/:slug/:public_id',
        component: ProductPageComponent
    },
];
