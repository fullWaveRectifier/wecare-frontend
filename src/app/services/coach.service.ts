import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { Coach } from '../models/coach.model';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  baseURL = "http://localhost:8081"
  coachIds=""
  constructor(private http: HttpClient) { }

  coachLogin(body):Observable<any>{
    return this.http.post(this.baseURL+"/coaches/login", body)
  }

  getAllCoaches(): Observable<any> {
    return this.http.get(this.baseURL + "/coaches/all")
  }

  coachRegister(data1:Coach) : Observable<any> {
    // alert(JSON.stringify(data));
   //Consume the exposed REST api from http://localhost:1020/bookFlight
   let a=Math.floor(Math.random() * 100)
   data1.coachId="LC24320201946122545"+a;
   this.coachIds=data1.coachId;
    return this.http.post(this.baseURL+"/coaches",data1).pipe(tap(data => console.log('Data Fetched:'+data)));

  }
}
