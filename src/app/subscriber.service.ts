import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor(private http:HttpClient) { }


  //reading data from server
  read():Observable<any>
  {
    return this.http.get('api/adminview/customers');
  }

  




}
