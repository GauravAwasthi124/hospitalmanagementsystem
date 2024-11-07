import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TokenserviceService } from 'src/app/shaired/service/tokenservice/tokenservice.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  apiUrl = 'http://localhost:3000/v1/auth/logout'

  constructor(private http: HttpClient, private tok: TokenserviceService) { }
  
  logout(): Observable<any> {
    const token = this.tok.getaccToken();
    return this.http.post<any>(`${this.apiUrl}`, {token}).pipe(
      tap(() => {
        this.tok.clearaccToken();
        this.tok.clearrefToken();
      })
    );
  }
}
