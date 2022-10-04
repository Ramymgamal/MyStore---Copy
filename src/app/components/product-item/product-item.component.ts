import { Component, OnInit,Input,Output } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
    @Input() product!:Product;
    @Output () item=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
AddCart(){
  alert("added to cart");
}


}
