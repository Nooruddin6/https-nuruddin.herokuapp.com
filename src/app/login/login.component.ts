import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import{LoginService} from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string;
  password:any;
  
  constructor(private router:Router,private loginservice:LoginService) { }

  ngOnInit()
   {
  }
  
   readData(v)
  {  
    if(v.name=="admin" && v.password=="admin")
    {
      this.router.navigate(["adminview"])
    }
    else
    {
      this.loginservice.readLogin(v);
      //this.router.navigate(["userview"])
    }
    console.log(v);
    this.name="";
    this.password="";
  }
}
