import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tutor } from '../interfaces/tutor';
import { Observable, throwError } from 'rxjs';
import {catchError, retry } from 'rxjs/operators';
import { timer } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  _api = "https://tutornowsu.azurewebsites.net/api/"
  // _api = "http://localhost:8443/api/"
  
  constructor(private http:HttpClient) { }

  getTutorWithID(suId): Observable<Tutor> {
    console.log(suId);
    let route: String = "tutor/"
    return this.http.get<Tutor>(`${this._api}${route}${suId}`);
  }

  getAvailableTutors(): Observable<Tutor> {
    let route:String = "tutors/getAvailableTutors";
    return this.http.get<Tutor>(`${this._api}${route}`);
  }

  setAvailable(suId): Observable<Tutor> {
    let route: String = "tutor/setAvailable/";
    return this.http.put<Tutor>(`${this._api}${route}${suId}`, "");
  }
  setUnavailable(suId): Observable<Tutor> {
    let route:String = "tutor/setUnAvailable/";
    return this.http.put<Tutor>(`${this._api}${route}${suId}`, "")
  }

  resetSelect(suId):Observable<Tutor> {
    let route: String = "tutor/unSelected/";
    return this.http.put<Tutor>(`${this._api}${route}${suId}`, "")
  }

  



  
}
