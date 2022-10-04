import { Injectable } from '@angular/core';
import { Client } from '../Models/Client';

@Injectable({
  providedIn: 'root'
})
export class ChecoutService {
  client!:Client;

  constructor() { }
  AddClientInfo(client:Client){
   this.client=client;
  }
  getclientInfo(){
    return this.client;
  }
}
