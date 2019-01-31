import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  //reading profiledata from server.js 
  readProfile():Observable<any>
  {
    return this.http.get('api/userview/profile');
  }

  
  //sending profiledata to server

  readSaveProfile(v)
  {
    this.http.put('api/userview/profile',v).subscribe();
    console.log(v);
  }


}
