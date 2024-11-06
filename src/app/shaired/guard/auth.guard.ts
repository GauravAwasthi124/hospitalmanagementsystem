import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenserviceService } from '../service/tokenservice/tokenservice.service';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  let tokenService = inject(TokenserviceService); 
  let storage = tokenService.getToken();
  if (!storage || storage == 'false') {
    router.navigateByUrl('/auth/login');
    return false;
  }
  return true;
};
