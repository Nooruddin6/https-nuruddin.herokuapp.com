import { Component, OnInit, Inject } from '@angular/core';
import * as JSPDF from 'jspdf';
import { CService } from '../c.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css'],
  providers:[{provide:'Window',useValue:window}]
})
export class CComponent implements OnInit {

  constructor(@Inject('Window') private window:Window,private c:CService,private router:Router) { }

  data:object[]=[];
  ngOnInit()
   {
    this.c.readC().subscribe(temp=>{this.data=temp;
      
     })
    }
    addCart(v)
    {
      this.c.readCart(v);
      this.router.navigate(['userview/cart']);
    }
}