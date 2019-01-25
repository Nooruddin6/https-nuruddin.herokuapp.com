import { Component, OnInit } from '@angular/core';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-nu',
  templateUrl: './nu.component.html',
  styleUrls: ['./nu.component.css']
})
export class NuComponent implements OnInit {

  data:object[]=[];
  constructor(private dropdown:DropdownService) { }

  ngOnInit() 
  {
    this.dropdown.getDropDown().subscribe(temp=>{this.data=temp})
  }
v
}
