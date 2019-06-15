import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchedComponent} from './matched/matched.component';
import { SetPreferencesComponent} from './set-preferences/set-preferences.component';
import { StudentSessionComponent} from './student-session/student-session.component';


const routes: Routes = [
  {
    path: 'student/:suId',
    component: SetPreferencesComponent,
    // children: [
    //   {
    //     path: 'matched/:suId',
    //     component: MatchedComponent
    //   },
    // ]
  },
  {
    path: 'student/session/:suId',
    component: StudentSessionComponent
  },
  {
    path: 'student/matched/:suId',
    component: MatchedComponent
  }

];
@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class StudentRoutingModule {}
