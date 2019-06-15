import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../interfaces/student';
import { Tutor } from '../interfaces/tutor';
import { Observable, throwError } from 'rxjs';
import {catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  _student_url = "https://tutornowsu.azurewebsites.net/api/student/";
  _api = "https://tutornowsu.azurewebsites.net/api/"

  // _student_url = "http://localhost:8443/api/student/";
  // _api = "http://localhost:8443/api/"

  constructor(private http:HttpClient){ }

  login(){
    console.log("login")
    window.location.href='https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=767592412962-tugaadg1gf3q035ikk153f95la9317f9.apps.googleusercontent.com&as=vVwEk0iWxqbKJRyyq7QFeQ&destination=https%3A%2F%2Ftutornowsu.azurewebsites.net&approval_state=!ChRQamlKVkFWelQxY01ETHRlVFJoOBIfODBGVlhKTWJqRjhVa013TWpqbVNUV1ZTdmRtWnRCWQ%E2%88%99AJDr988AAAAAXQG7YmNPKdKe_RGyG7GCEzifH9GRiFku&oauthgdpr=1&xsrfsig=ChkAeAh8TwDUTxiCYBEW_Btotv1ubEeMSNzwEg5hcHByb3ZhbF9zdGF0ZRILZGVzdGluYXRpb24SBXNvYWN1Eg9vYXV0aHJpc2t5c2NvcGU&flowName=GeneralOAuthFlow';
  }
  getStudentWithID(suId): Observable<Student>{
    console.log(suId);
    return this.http.get<Student>(`${this._student_url}${suId}`);
  }

  getAvailableTutors(): Observable<Tutor> {
    let _availableTutors = "tutors/getAvailableTutors";
    return this.http.get<Tutor>(`${this._api}${_availableTutors}`);
  }

  selectTutor(suId):Observable<Tutor> {
    let _selectTutor = "tutor/setSelected/";
    console.log("service: ", suId)
    return this.http.put<Tutor>(`${this._api}${_selectTutor}${suId}`, "");
  }





}
