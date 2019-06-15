import { Component, OnInit } from '@angular/core';
import { TutorService} from '../../services/tutor.service';
import { Tutor } from '../../interfaces/tutor';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service'


@Component({
  selector: 'app-matched',
  templateUrl: './matched.component.html',
  styleUrls: ['./matched.component.css']
})
export class MatchedComponent implements OnInit {

  tutors: Tutor;
  suId: string;

  constructor(private tutorService: TutorService,
              private route: ActivatedRoute,
              private studentService: StudentService) {
    this.suId = this.route.snapshot.paramMap.get('suId');
  }

  ngOnInit() {
    this.tutorService.getAvailableTutors().subscribe(tutors => {
        this.tutors = tutors;
    });
  }

  getAvailableTutors() {
    this.tutorService.getAvailableTutors().subscribe(tutors => {
      console.log(tutors);
    });
  }

  selectTutor(suID){
    this.studentService.selectTutor(suID).subscribe(student => {
      console.log("suID:", suID)
    });
  }





}
