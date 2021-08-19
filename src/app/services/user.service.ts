import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = "http://localhost:8082"
  userIds=""
  constructor(private http: HttpClient) { }

  userLogin(body):Observable<any>{
    return this.http.post(this.baseURL+"/users/login", body)
  }

  userRegister(data1) : Observable<any>{
    let a=Math.floor(Math.random() * 100)
    data1.userId="U1832020922222668"+a;
    this.userIds=data1.userId;
    return this.http.post(this.baseURL+"/users", data1);
  }
}
