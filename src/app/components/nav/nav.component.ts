import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private cartservice:CartService) { }

  ngOnInit(): void {

  }
  getItemCount():number{
     return this.cartservice.itemCount();
  }

}
