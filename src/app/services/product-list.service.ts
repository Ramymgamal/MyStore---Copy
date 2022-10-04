import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Models/product';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {


  constructor(private http:HttpClient ) { }

  getProductList():Observable< Product[]>{
   return this.http.get<Product[]>('assets/data.json');

  }


}
