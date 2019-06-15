import { Component, OnInit, OnDestroy } from '@angular/core';
import { TutorService} from '../../services/tutor.service';
import { Tutor } from '../../interfaces/tutor';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-tutor-edit-profile',
  templateUrl: './tutor-edit-profile.component.html',
  styleUrls: ['./tutor-edit-profile.component.css']
})
export class TutorEditProfileComponent implements OnInit {
  suID: String;
  tutor: Tutor;

  constructor(
      private tutorService: TutorService
    , private route: ActivatedRoute
    , private router: Router ) { 

      this.suID = this.route.snapshot.paramMap.get('suId');
      console.log(this.suID);
    }

  ngOnInit() {
    this.tutorService.getTutorWithID(this.suID).subscribe(tutor =>{
      if (tutor){
        this.tutor = tutor;
      }
      else{
        this.router.navigate(['/PageNotFound']);
      }
    });

  }

}
