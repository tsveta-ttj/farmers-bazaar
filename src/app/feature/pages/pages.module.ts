import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsModule } from '../products/products.module';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { CreateProductPageComponent } from './create-product-page/create-product-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomePageComponent,
    CatalogPageComponent,
    CreateProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    FormsModule
  ],
  exports: [
    
  ]
})
export class PagesModule { }
