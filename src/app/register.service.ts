import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import{ Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient,private router:Router) { }

  getData(v)
  {
    console.log(v);
    this.http.post('nu/register',v).subscribe(temp=>
      {alert(temp)
      if(temp=="registered successfully")
      {
       this.router.navigate(["/nu/login"]);
      }
      if(temp=="username already existed...choose another name")
      {
        this.router.navigate(["/nu/register"]);
      }
      
       });

    }

}
