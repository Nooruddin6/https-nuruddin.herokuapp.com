import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   cart:object[]=[];

  constructor(private dataservice:DataService) { }

  ngOnInit()
   {
    return this.dataservice.getCart().subscribe(temp=>{this.cart=temp;})
   }

}
