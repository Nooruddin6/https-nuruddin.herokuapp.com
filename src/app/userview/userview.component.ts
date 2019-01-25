import { Component, OnInit } from '@angular/core';

import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  constructor(private dropdown:DropdownService) { }
  data:object[]=[];


  ngOnInit() 
  {
    // this.dropdown.dropDown().subscribe(temp=>{this.data=temp})
  }

}
