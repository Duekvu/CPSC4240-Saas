import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetPreferencesComponent } from './set-preferences/set-preferences.component';
import { MatchedComponent } from './matched/matched.component';
import { StudentSessionComponent } from './student-session/student-session.component';
import { StudentRoutingModule} from './student-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    SetPreferencesComponent,
    MatchedComponent,
    StudentSessionComponent
  ],
  imports: [
    NgxSpinnerModule,
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
