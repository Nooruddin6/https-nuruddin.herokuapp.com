import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JavaService } from '../java.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  constructor(private java:JavaService,private router:Router) { }

 
  data:any[]=[];

  ngOnInit()
   {
    this.java.readJava().subscribe(temp=>{this.data=temp;
      
     })
    }

    addCart(v)
    {
      this.java.readCart(v);
      this.router.navigate(['userview/cart']);
    }

}
