import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  apiUrl = 'http://localhost:3000/v1/auth/logout'
  constructor(private http: HttpClient) { }


  logout(token:any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}`, {token});
  }
}
