import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/interface';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  productsList: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.loadProductList().subscribe(productList => {
      this.productsList = productList
    });

  }

}
