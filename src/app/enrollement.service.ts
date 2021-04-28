import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollementService {

  constructor(private http:HttpClient) { }

  url:any="http://localhost:3000/app/forms"
  enroll(userData:any){
    return this.http.post<any>(this.url,userData)
  }
  loginData(loginValue:any){
    return this.http.post<any>(this.url,loginValue)
  }
}
