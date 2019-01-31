import { Component, OnInit } from '@angular/core';
import { AngularService } from '../angular.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  constructor(private angular:AngularService,private router:Router) { }

  data:any[]=[];

  ngOnInit()
   {
    this.angular.readAngular().subscribe(temp=>{this.data=temp;
      console.log(temp);
      
     })
    }

    addCart(v)
    {
      this.angular.readCart(v);
      this.router.navigate(['userview/cart']);
    }

}
