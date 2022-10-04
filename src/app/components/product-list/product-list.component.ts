import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  constructor(private productService:ProductListService,private cartservice:CartService) { }
  productList!:Product[];
  ngOnInit(): void {

    this.productService.getProductList().subscribe(data=> {this.productList=data} )
  }
  addToCart(product:Product){

   this.cartservice.addToCart(product,1);
   alert('the product is adde to cart');

  }



}
