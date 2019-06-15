import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule} from './app-routing.module';
import { StudentModule } from './student/student.module';
import { TutorModule } from './tutor/tutor.module';
 


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { TutorService } from './services/tutor.service';
import { StudentService } from './services/student.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
// import { FlexLayoutModule } from '@angular/flex-layout';


const routes: Routes = [

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent
  ],

  imports: [
    NgxSpinnerModule,
    BrowserAnimationsModule,
    TutorModule,
    StudentModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    // FlexLayoutModule

  ],
  providers: [
    TutorService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
