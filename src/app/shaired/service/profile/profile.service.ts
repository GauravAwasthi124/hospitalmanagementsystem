import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:3000/v1/profile';

  constructor(private http: HttpClient) {}

  profileUser(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, {});
  }
}   
