import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IProduct } from 'src/app/core/interface';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  loginStatus$: Observable<boolean>;
  product: IProduct;
  userId$: Observable<string>;
  isAuthor: boolean;
  currentId: any


  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginStatus$ = this.authService.isLoggedIn;

    this.authService.currentUserId.subscribe(id => {
      this.currentId = id
      console.log(`Currently logged user id 1`, this.currentId);

    });

    this.activatedRoute.params.subscribe(params => {
      const productId = params['id'];
      this.productService.loadProductById(productId).subscribe(product => {
        this.product = product;
        console.log('current product', this.product);

        console.log('Product Data', this.product.owner._id)
        console.log(`Currently logged user id 2`, this.currentId);

        if (this.product.owner._id == this.currentId) {
          this.isAuthor = true;
        } else {
          this.isAuthor = false;
        }
        
        console.log(`isThis Author`,this.isAuthor);
        
      });
    });

  }
}
