import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutor-session',
  templateUrl: './tutor-session.component.html',
  styleUrls: ['./tutor-session.component.css']
})
export class TutorSessionComponent implements OnInit {
  suID: String;
  constructor( private route: ActivatedRoute) { 
    this.suID = this.route.snapshot.paramMap.get('suId');

  }

  ngOnInit() {
  }

}
