import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-product-page',
  templateUrl: './create-product-page.component.html',
  styleUrls: ['./create-product-page.component.css']
})
export class CreateProductPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitNewProduct(newThemeForm: NgForm): void{
    console.log(newThemeForm.value);
    
  }

}
