import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { CatalogPageComponent } from './feature/pages/catalog-page/catalog-page.component';
import { CreateProductPageComponent } from './feature/pages/create-product-page/create-product-page.component';
import { DetailsPageComponent } from './feature/pages/details-page/details-page.component';
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
        canActivate: [AuthGuard],
        component: CreateProductPageComponent
    },
    {
        path: 'catalog/:id',
        component: DetailsPageComponent
    },
    

];


export const AppRoutingModule = RouterModule.forRoot(routes);
