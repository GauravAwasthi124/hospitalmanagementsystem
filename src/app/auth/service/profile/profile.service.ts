import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:3000/v1/profile';
  // token = localStorage.getItem('refresh-token');

  constructor(private http: HttpClient) { }
  profileUser(token: any): Observable<any> {
    if (!token) {
      throw new Error('Token is required');
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${this.apiUrl}`, {}, { headers });
  }
}
