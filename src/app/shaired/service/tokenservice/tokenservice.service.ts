import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenserviceService {

  private reftoken = 'refresh_token';
  private acctoken = 'access_token';
  constructor() { }

  //refresh token
  saverefToken(token: string): void {
    localStorage.setItem(this.reftoken, token);
  }

  getrefToken(): string | null {
    return localStorage.getItem(this.reftoken);
  }

  clearrefToken(): void {
    localStorage.removeItem(this.reftoken);
  }


  // access token 
  saveaccToken(token: string): void{
    localStorage.setItem(this.acctoken, token);
  }

  getaccToken(): string | null{
    return localStorage.getItem(this.acctoken);
  }

  clearaccToken(): void{
    localStorage.removeItem(this.acctoken);
  }
  
}
