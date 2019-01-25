import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http:HttpClient) { }

  //course of normaluser
  getDropDown():Observable<any>
  {
  return this.http.get<any>('nu');
  }

  //course of userview
//   dropDown():Observable<any>
//   {
//     return this.http.get<any>('userview');
//   }

}
