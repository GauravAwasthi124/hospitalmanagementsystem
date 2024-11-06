import { Injectable } from '@angular/core';
import { TokenserviceService } from '../tokenservice/tokenservice.service';

@Injectable({
  providedIn: 'root'
})
export class ShairedService {
  constructor(private token: TokenserviceService) { }
  
  reftoken = this.token.getToken();
   
}
