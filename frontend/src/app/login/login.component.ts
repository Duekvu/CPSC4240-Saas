import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { StudentService} from '../services/student.service'

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 title = 'Seattle University Tutors';
 suId:string = "";


 constructor(private router: Router, private studentService: StudentService) {
 }

 redirectGoogle(){
   this.studentService.login();
 }

 ngOnInit() {
 }

}