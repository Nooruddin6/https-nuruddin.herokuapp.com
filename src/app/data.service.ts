import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService
 {

  constructor(private http:HttpClient) { }

   getCart():Observable<any>
   {
   return this.http.get<any>("assets/cart.json");
   }
  // getSub():Observable<any>
  // {
  //   return this.http.get<any>("assets/customers.json");
  // }
}
