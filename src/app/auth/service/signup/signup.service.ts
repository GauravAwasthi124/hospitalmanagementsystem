import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  apiUrl = 'http://localhost:3000/v1/auth/register';
  constructor(private http: HttpClient) { 
  }
  register(email: any, password: any, clinic_id: any, user_role: string[]): Observable<any> {
    const body= {email,password,clinic_id,user_role,}
    return this.http.post<any>(`${this.apiUrl}`,body);
  }
}
