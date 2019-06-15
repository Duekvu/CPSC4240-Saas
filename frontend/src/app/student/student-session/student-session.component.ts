import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-session',
  templateUrl: './student-session.component.html',
  styleUrls: ['./student-session.component.css']
})
export class StudentSessionComponent implements OnInit {
  suId: string;

  constructor( private route: ActivatedRoute) { 
    this.suId = this.route.snapshot.paramMap.get('suId');
  }

  ngOnInit() {
  }

}
