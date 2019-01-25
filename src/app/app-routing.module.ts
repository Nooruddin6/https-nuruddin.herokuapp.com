import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhythisComponent } from './whythis/whythis.component';
import { AuthorComponent } from './author/author.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { HistoryComponent } from './history/history.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { CourseComponent } from './course/course.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { UserviewComponent } from './userview/userview.component';
import { NuComponent } from './nu/nu.component';
import { CComponent } from './c/c.component';


const routes: Routes = [  {path:"nu",component:NuComponent,
                children:[{path:"home",component:HomeComponent},
                          {path:"ythis",component:WhythisComponent},
                          {path:"authors",component:AuthorComponent},
                          {path:"login",component:LoginComponent},
                          {path:"register",component:RegisterComponent},
                          {path:"c",component:CComponent},
                          {path:"c/login",component:LoginComponent},
                          {path:"login/register",component:RegisterComponent}
                          
                        
                         ]},
                          
                        
                
                          

                          {path:"userview",component:UserviewComponent,
                 children:[{path:"profile",component:ProfileComponent},
                           {path:"home",component:HomeComponent},
                          {path:"cart",component:CartComponent},
                          {path:"history",component:HistoryComponent},
                          {path:"authors",component:AuthorComponent},
                          
                         ]},
                         


                          
                          {path:"adminview",component:AdminviewComponent,
                children:[{path:"course",component:CourseComponent},
                          {path:"customers",component:SubscribersComponent},
                          {path:"purchases",component:PurchasesComponent}]},
                          {path:"",redirectTo:"nu/home",pathMatch:"full"}

                          
                       
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
