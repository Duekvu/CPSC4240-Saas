import { Component, OnInit, OnDestroy } from '@angular/core';
import { TutorService} from '../../services/tutor.service';
import { Tutor } from '../../interfaces/tutor';
import { timer} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NgxSpinnerService} from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tutor-availability',
  templateUrl: './tutor-availability.component.html',
  styleUrls: ['./tutor-availability.component.css']
})
export class TutorAvailabilityComponent implements OnInit {

  tutor: Tutor;
  polling: Boolean = true;
  editMode: Boolean = true;
  suId: String;
 

  constructor(private tutorService: TutorService
            , private spinner: NgxSpinnerService
            , private route: ActivatedRoute
            , private router: Router
            , private http: HttpClient) { 
              this.suId = this.route.snapshot.paramMap.get('suId');
              // console.log('SUID: ',this.suId);
            }

  ngOnInit() {
    // let suId = (this.route.snapshot.paramMap.get('suId'));
    if (this.suId == ""){
      this.router.navigate(['/PageNotFound']);
    }
    else{
      this.tutorService.getTutorWithID(this.suId).subscribe(tutor =>{
        if (tutor){
          this.tutorService.resetSelect(this.suId).subscribe(tutor =>{
            console.log(tutor)
          });
          this.tutor = tutor;
          
         
        }
        else{
          this.router.navigate(['/PageNotFound']);
        }
      });
    }    
  }
  

  setAvailable(){
    let suId = (this.route.snapshot.paramMap.get('suId'));
    this.tutorService.setAvailable(suId).subscribe(tutor =>{
      console.log(tutor);
      this. showSpinner();

      let checkStatus$ = timer(0,1000).pipe(
        switchMap(() => this.tutorService.getTutorWithID(suId))
      ).subscribe((result:Tutor) => {
        
        if (result.isSelected){
          checkStatus$.unsubscribe();
          this.router.navigate([`${'tutor/session-tutor/'}${suId}`]);
        }

        else if (!this.polling){
          checkStatus$.unsubscribe();
          this.polling = true
        } 
      })
    });
  }
  
  setUnavailable(){
    let suId = (this.route.snapshot.paramMap.get('suId'));
    this.tutorService.setUnavailable(suId).subscribe(tutor =>{
      console.log(tutor);
    });
    this.polling = false;
    this. hideSpinner();
  }

  private showSpinner(){
    this.spinner.show();
  }

  private hideSpinner(){
    this.spinner.hide();
  }

}
