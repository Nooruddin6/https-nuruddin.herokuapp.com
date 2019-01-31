import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeanstackService {

  constructor(private http:HttpClient) { }

  //reading data into meanstack componet
  readMean():Observable<any>
  {
    return this.http.get('api/userview/meanstack');
    
  }

  //posting data to cart component
  readCart(v)
  {
    this.http.post('api/userview/meanstack',v).subscribe(temp=>{console.log(temp)})
  }
}
