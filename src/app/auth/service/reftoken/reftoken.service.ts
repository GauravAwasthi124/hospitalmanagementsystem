import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenserviceService } from 'src/app/shaired/service/tokenservice/tokenservice.service';

@Injectable({
  providedIn: 'root'
})
export class ReftokenService {

  private apiUrl = 'http://localhost:3000/v1/auth/refresh-tokens';

  constructor(private http: HttpClient, private tokenService: TokenserviceService) { }
  refreshtoken(): Observable<any> {
    console.log(this.tokenService.getrefToken());
    const token = this.tokenService.getrefToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${this.apiUrl}`, {token}, { headers });
  }
}
