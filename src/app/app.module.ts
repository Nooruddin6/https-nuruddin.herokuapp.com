import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WhythisComponent } from './whythis/whythis.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthorComponent } from './author/author.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { HistoryComponent } from './history/history.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { SubscribersComponent } from './subscribers/subscribers.component';
import { UserviewComponent } from './userview/userview.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { NuComponent } from './nu/nu.component';
import { CourseComponent } from './course/course.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { SearchPipe } from './search.pipe';
import { CComponent } from './c/c.component';
import { AuthorizationService } from './authorization.service';
import { UserhomeComponent } from './userhome/userhome.component';
import { JavaComponent } from './java/java.component';
import { MeanstackComponent } from './meanstack/meanstack.component';
import { AngularComponent } from './angular/angular.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhythisComponent,
    RegisterComponent,
    LoginComponent,
    AuthorComponent,
    ProfileComponent,
    CartComponent,
    HistoryComponent,
    SubscribersComponent,
    UserviewComponent,
    AdminviewComponent,
    NuComponent,
    CourseComponent,
    PurchasesComponent,
    SearchPipe,
    CComponent,
    UserhomeComponent,
    JavaComponent,
    MeanstackComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [{ provide:HTTP_INTERCEPTORS,
                useClass:AuthorizationService,
                multi:true}],
                
  bootstrap: [AppComponent]
})

export class AppModule { }
