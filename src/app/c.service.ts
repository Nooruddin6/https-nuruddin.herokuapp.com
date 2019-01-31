import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CService {

  constructor(private http:HttpClient) { }
  //reading data into c componet
  readC():Observable<any>
  {
    return this.http.get('api/userview/c');
    
  }

  //posting data to cart component
  readCart(v)
  {
    this.http.post('api/userview/c',v).subscribe(temp=>{console.log(temp)})
  }
}

