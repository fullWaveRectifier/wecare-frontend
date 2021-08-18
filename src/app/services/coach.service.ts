import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  baseURL = "http://localhost:8081"
  constructor(private http: HttpClient) { }

  coachLogin(body):Observable<any>{
    return this.http.post(this.baseURL+"/coaches/login", body)
  }

  getAllCoaches(): Observable<any> {
    return this.http.get(this.baseURL + "/coaches/all")
  }
}
