import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  
name:string;
email:any;
dateofbirth:any;
contactno:number;

 
  data:any={};
    
  profiledata:any={};

  constructor(private profile:ProfileService) { }

  //receving data from service
  ngOnInit() 
  {
    this.profile.readProfile().subscribe(temp=>{this.data=temp;})
    
  }

  editProfile(v)
  {
    
   this.profiledata=v;
   console.log(v);
  }

  saveProfile()
  {
   this.profile.readSaveProfile(this.profiledata);
  }


}
