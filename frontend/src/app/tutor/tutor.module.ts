import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorRoutingModule } from './tutor-routing.module';
import { TutorAvailabilityComponent } from './tutor-availability/tutor-availability.component';
import { TutorSessionComponent } from './tutor-session/tutor-session.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TutorEditProfileComponent } from './tutor-edit-profile/tutor-edit-profile.component';

@NgModule({
  declarations: [TutorAvailabilityComponent, TutorSessionComponent, TutorEditProfileComponent],
  imports: [
    NgxSpinnerModule,
    CommonModule,
    TutorRoutingModule
  ]
})
export class TutorModule { }
