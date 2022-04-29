import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-create-product-page',
  templateUrl: './create-product-page.component.html',
  styleUrls: ['./create-product-page.component.css']
})
export class CreateProductPageComponent implements OnInit {
  
  @ViewChild('createForm') createForm!: NgForm;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }

  submitNewProduct(createForm: NgForm): void {
    this.productService.addProduct$(createForm.value).subscribe({
      next: () => {
        this.createForm.reset();
        this.router.navigate(['/catalog']);
      
      },
      error: (error) => {
        console.error(error);
      }
    });

    this.createForm.reset();
    this.router.navigate(['/home']);
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

}
