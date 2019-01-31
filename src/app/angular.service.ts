import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AngularService {

  constructor(private http:HttpClient) { }
  //reading data into angular componet
  readAngular():Observable<any>
  {
    return this.http.get('api/userview/angular');
    
  }

  //posting data to cart component
  readCart(v)
  {
    this.http.post('api/userview/angular',v).subscribe(temp=>{console.log(temp)})
  }
}
