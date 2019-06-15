import { Component, OnInit } from '@angular/core';
import { StudentService} from '../../services/student.service';
import { Student } from '../../interfaces/student';
import { Subscription } from 'rxjs';
import { NgxSpinnerService} from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-set-preferences',
  templateUrl: './set-preferences.component.html',
  styleUrls: ['./set-preferences.component.css']
})
export class SetPreferencesComponent implements OnInit {

  student: Student;
  loading = false;
  loadingSubscription: Subscription;

  constructor(private studentService: StudentService
            , private spinner: NgxSpinnerService
            , private route: ActivatedRoute
            , private router: Router
            ) { }

  ngOnInit() {
    let suId = (this.route.snapshot.paramMap.get('suId'));
    if (suId == ""){
      this.router.navigate(['/PageNotFound']);
    }
    else{
      this.studentService.getStudentWithID(suId).subscribe(student =>{
        if (student){
          this.student = student;
        }
        else{
          this.router.navigate(['/PageNotFound']);
        }
      });
    }    
  }

  matchingTutors(){
    this.showSpinner();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

  }

  cancelMatch(){
    this.hideSpinner();

  }

  private showSpinner(){
    this.spinner.show();
  }

  private hideSpinner(){
    this.spinner.hide();
  }
  
}
