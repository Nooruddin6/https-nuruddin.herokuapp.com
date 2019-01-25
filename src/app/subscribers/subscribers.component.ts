import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import{SubscriberService} from '../subscriber.service';



@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {

      name:string;
    email:any;
    dateofbirth:any;
    contactno:number;
    searchTerm:string;

  data:object[]=[];

  constructor( private subscriber:SubscriberService) { }

  ngOnInit()
   {
   this.subscriber.read().subscribe(temp=>{this.data=temp;
    console.log(temp);
   });
   
  }

}
