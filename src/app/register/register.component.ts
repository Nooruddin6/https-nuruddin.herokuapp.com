import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:string;
  email:any;
  password:any;
  confirmpassword:any;
  contactno:any;
  dateofbirth:any;
  gender:string;
  

  constructor(private router:Router,private registerservice:RegisterService) { }

  ngOnInit()
   {
  }

  submit(v)
  {
    this.registerservice.getData(v);
    
    //this.router.navigate(["nu/login"]);
    console.log(v);
     this.name="";
     this.email="";
     this.password="";
     this.confirmpassword="";
     this.contactno="";
     this.dateofbirth="";
  }


}
