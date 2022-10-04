import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Models/Client';
import { ChecoutService } from 'src/app/services/checout.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
   user!:Client ;


  constructor(private client:ChecoutService) { }

  ngOnInit(): void {
    this.user=this.client.getclientInfo();
  }

}
