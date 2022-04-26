import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './core/header/header.component';
import { PagesModule } from './feature/pages/pages.module';
import { ProductsModule } from './feature/products/products.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    PagesModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
  ]
})
export class AppModule { }
