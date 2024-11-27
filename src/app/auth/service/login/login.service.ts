import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  apiUrl = 'http://localhost:3000/v1/auth/login';
  constructor(private http: HttpClient) {}
  
  login(email:any,password:any):Observable<any> {
    const body = { email, password };
    return this.http.post<any>(`${this.apiUrl}`,body);
  }
}
