import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  data:any[]=[];

  constructor(private http:HttpClient) { }

  //posting data to server for postoperation
  readCourse(v)
  {
    console.log(v);
    this.http.post('api/adminview/course',v).subscribe(); 
  }

  //sending updated course data to server for update operation
  readData(v)
  {
    this.http.put<any>('api/adminview/course',v).subscribe(temp=>{this.data=temp});
    //console.log(v);
  }

  //reading data from server
  read():Observable<any>
  {
    return this.http.get('api/adminview/course');
  }
  

  //deleting course user
  deletecourse(v):Observable<any>
  {
    var httpOption={
                    headers:new HttpHeaders({'content-type':'application/json'}),
                    body:v
    }

return this.http.delete<any[]>('api/adminview/course',httpOption)
  }
  
}
