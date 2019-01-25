import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  data:any[]=[];

  constructor(private http:HttpClient) { }

  //posting data to server 
  readCourse(v)
  {
    console.log(v);
    this.http.post('/adminview/course',v).subscribe(); 
  }

  //sending updated course data to server for update operation
  readData(v)
  {
    this.http.put<any>('adminview/course',v).subscribe(temp=>{this.data=temp});
    console.log(v);
  }

  //reading data from server
  read():Observable<any>
  {
    return this.http.get('adminview/course');
  }
  

  //deleting course user
  deletecourse(v):Observable<any>
  {
    var httpOption={
                    headers:new HttpHeaders({'content-type':'application/json'}),
                    body:v
    }

return this.http.delete<any[]>('adminview/course',httpOption)
  }
  
}
