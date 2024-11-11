import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'http://localhost:3000/v1/users/';
  constructor(private http:HttpClient) { }
  
  getAllUsers():Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
  getUserByid(id:number):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  createUser(email: string, password: string, clinic_id: number, user_role: string): Observable<any> {
    const createbody = { email, password, clinic_id, user_role };
    return this.http.post<any>(`${this.apiUrl}`, { createbody });
  }
  deleteUser(id:number):Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  
  updateUser(id:number,email:string,clinic_id:number,user_role:string,):Observable<any> {
    const updatebody = { email, clinic_id, user_role };
    return this.http.patch<any>(`${this.apiUrl}/${id}`,{updatebody});
  }

  
}
