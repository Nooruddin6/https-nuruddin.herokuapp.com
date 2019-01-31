import { Component, OnInit } from '@angular/core';

import { DropdownService } from '../dropdown.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  constructor(private dropdown:DropdownService,private router:Router) { }
  data:object[]=[];


  ngOnInit() 
  {
    // this.dropdown.dropDown().subscribe(temp=>{this.data=temp})
  }
  logout()
  {
   var a= localStorage.removeItem('id_token');
    alert(a);
    this.router.navigate(['nu/home']);


  }

}
