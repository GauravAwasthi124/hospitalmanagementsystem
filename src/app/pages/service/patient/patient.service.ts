import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  apiUrl = 'http://localhost:3000/v1/patients';
  constructor(private http: HttpClient) { }
  
  getPatient():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
