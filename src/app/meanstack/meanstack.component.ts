import { Component, OnInit } from '@angular/core';
import { MeanstackService } from '../meanstack.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meanstack',
  templateUrl: './meanstack.component.html',
  styleUrls: ['./meanstack.component.css']
})
export class MeanstackComponent implements OnInit {

  constructor(private meanstack:MeanstackService,private router:Router) { }
data:any[];
  ngOnInit()
  {
   this.meanstack.readMean().subscribe(temp=>{this.data=temp;
     
    })
   }

   addCart(v)
   {
     this.meanstack.readCart(v);
     this.router.navigate(['userview/cart']);
   }
}
