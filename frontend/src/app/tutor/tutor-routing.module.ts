import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorAvailabilityComponent } from './tutor-availability/tutor-availability.component';
import { TutorSessionComponent} from './tutor-session/tutor-session.component';
import { TutorEditProfileComponent} from './tutor-edit-profile/tutor-edit-profile.component';
const routes: Routes = [
  {
    path: 'tutor/:suId',
    component: TutorAvailabilityComponent,
  },
  {
    path: 'tutor/session-tutor/:suId',
    component: TutorSessionComponent
  },
  {
    path: 'tutor/editProfile/:suId',
    component: TutorEditProfileComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule { }
