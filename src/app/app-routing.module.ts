import { RouterModule, Routes } from '@angular/router';
import { CatalogPageComponent } from './feature/pages/catalog-page/catalog-page.component';
import { CreateProductPageComponent } from './feature/pages/create-product-page/create-product-page.component';
import { HomePageComponent } from './feature/pages/home-page/home-page.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'catalog',
        component: CatalogPageComponent
    },
    {
        path: 'create',
        component: CreateProductPageComponent
    },
    

];


export const AppRoutingModule = RouterModule.forRoot(routes);
