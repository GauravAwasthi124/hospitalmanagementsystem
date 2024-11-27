import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenserviceService {

  private reftoken = 'refresh_token';
  private acctoken = 'access_token';
  private userid = 'userid';
  private userrole= 'userrole'
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

  //user id
  saveuserid(token: string): void{
    localStorage.setItem(this.userid,token);
  }

  getuserid(): string | null{
    return localStorage.getItem(this.userid);
  }
  clearuserid(): void{
    localStorage.removeItem(this.userid);
  }
  
  // user role
  saveuser_role(token: string):void {
    localStorage.setItem(this.userrole,token);
  }

  getuser_role(): string | null {
    return localStorage.getItem(this.userrole);
  }
  clearuser_role(): void {
    localStorage.removeItem(this.userrole);
  }
  
}
