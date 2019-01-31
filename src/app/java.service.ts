import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  constructor(private http:HttpClient) { }


  //reading data into java componet
  readJava():Observable<any>
  {
    return this.http.get('api/userview/java');
    
  }

  //posting data to cart component
  readCart(v)
  {
    this.http.post('api/userview/java',v).subscribe(temp=>{console.log(temp)})
  }

}
