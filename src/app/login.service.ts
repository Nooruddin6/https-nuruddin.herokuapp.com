import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import{ Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private router:Router) { }

  readLogin(v)
  {
    console.log(v);
    this.http.post('api/nu/login',v).subscribe(res=>{

      console.log(res);

      localStorage.setItem('id_token',res['idToken']);

      if(res=="wrong password")
      {
        alert('wrong password')
        this.router.navigate(["login"]);
      }
      else if(res=="user not existed")
      {
        alert('user not existed')
        this.router.navigate(["login"]);
      }
      else
      {
        this.router.navigate(['userview']);
      }

       
        
    });
  }

}
