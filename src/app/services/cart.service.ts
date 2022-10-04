import { Injectable } from '@angular/core';
import { Cart } from '../Models/cart';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartProduct:Cart[]=[];
product!:Product;


  constructor() { }

  addToCart(product:Product,amount:number){
    if (this.cartProduct.find(a=>a.product.id==product.id))
      {
       var cart=this.cartProduct.find(a=>a.product.id==product.id);
      cart.amount=cart.amount+amount;


       }
    else
      {
        this.cartProduct.push({product,amount});
      }


  }
  getItems(){
    return this.cartProduct;
  }
  clearCart(){
    this.cartProduct=[];
    return this.cartProduct;
  }
  totalPrice(){
    var sum=0;
    for (var i = 0; i< this.cartProduct.length; i++)
    {
     sum += this.cartProduct[i].amount *this.cartProduct[i].product.price;
    }
   return sum;
  }
  itemCount(){
    var sum=0;
    for (var i = 0; i< this.cartProduct.length; i++)
    {
     sum += this.cartProduct[i].amount;
    }
   return sum;
  }

  removeProduct(cart:Cart){
    const index = this.cartProduct.indexOf(cart, 0);
    this.cartProduct.splice(index,1);
}
}
