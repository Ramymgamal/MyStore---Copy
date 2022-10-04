import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductListService } from 'src/app/services/product-list.service';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/Models/cart';



@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  proLIst!:Product[];
  p:any;
  amount:number=0;

  constructor(private route: ActivatedRoute,
    private productservice:ProductListService,
    private cartservice:CartService) { }

  ngOnInit(): void {



    // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;

  const productIdFromRoute= Number(routeParams.get('id'));



  this.productservice.getProductList().subscribe(data=>{
    this.proLIst = data;
    this.p=this.proLIst.find(a=>a.id==productIdFromRoute)
    });


  }
  AddToCart(cartProduct:Product){

    this.cartservice.addToCart(cartProduct,this.amount);

    alert('thie item  is added');

  }



}
