import { Component, OnInit } from '@angular/core';
import{CourseService} from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  implements OnInit {

  constructor(private courseservice:CourseService){}

    t:boolean=false;
    obj1:object[]=[];

    coursename:string;
    coursedetails:string;
    courseauthor:string;
    authordetails:string;
    authorimage:any;
    price:string;
    uses:string;
    samplefile:any;
    mainfile:any;

    
    data:object={};

    coursedata:any;

    data1:object[]=[];


    ngOnInit()
    {
      this.courseservice.read().subscribe(temp=>{this.data1=temp
          console.log(temp);

      })

    }


    submit(v)
      {
        console.log(v);
        this.obj1.push(v);     

        this.coursename='';
        this.coursedetails='';
        this. courseauthor='';
        this.authordetails='';
        this.authorimage='';
        this.price='';
        this.uses='';
        this.samplefile='';
        this.mainfile='';

        
        //sending data to service course
        this.courseservice.readCourse(v);
      }


      delete(v)
        {
          console.log(v)
          this.courseservice.deletecourse(v).subscribe(temp=>this.data1=temp)
        }


      editData(v):void
        {
          this.t=true;
          this.data=v;
        }

        //update
        saveCourse(v)
        {
         this.courseservice.readData(this.data);
         console.log(v);
        }
        
  
  }
  