import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsModule } from '../products/products.module';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { CreateProductPageComponent } from './create-product-page/create-product-page.component';
import { FormsModule } from '@angular/forms';
import { DetailsPageComponent } from './details-page/details-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
    CatalogPageComponent,
    CreateProductPageComponent,
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    
  ]
})
export class PagesModule { }
