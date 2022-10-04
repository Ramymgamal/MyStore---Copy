import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChecoutService } from 'src/app/services/checout.service';
import { Client } from 'src/app/Models/Client';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  form:FormGroup;
   cr:Cart;
   client!:Client;
   amount:number;
   totalPrice:number;
   items :Cart[];

  constructor(private cartservice:CartService,private checkout:ChecoutService, private router:Router) { }

  ngOnInit(): void {

      this. items=this.cartservice.getItems();
      this.totalPrice=this.cartservice.totalPrice();
       this.form=new FormGroup({
      fullname:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      credit:new FormControl('',[Validators.required]),



    })
  }

  onSubmit(){
    this.client={FullName:this.form.get('fullname').value,address:this.form.get('address').value,CreditCard:this.form.get('credit').value,total:this.totalPrice}
    this.checkout.AddClientInfo(this.client);
    alert("confirmed");
    this.router.navigate(['/confirmation'])

  }
 reCalculate(item:Cart){

  this.totalPrice= this.cartservice.totalPrice();

 }
remove(item:Cart)
{
  this.cartservice.removeProduct(item);
  this.totalPrice= this.cartservice.totalPrice();
alert("removed");

}

}
