import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../interface';

const apiURL = environment.apiUrl;

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  
  loadProductList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${apiURL}/data/catalog`)
  }

  loadProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${apiURL}/data/catalog/${id}`);
  }

  addProduct$(body: { title: string, description: string, price: number, img: string}): Observable<IProduct> {
    return this.http.post<IProduct>(`${apiURL}/data/catalog`, body);
  }


     
}
