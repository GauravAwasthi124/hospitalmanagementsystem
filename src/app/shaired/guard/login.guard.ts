import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenserviceService } from '../service/tokenservice/tokenservice.service';

export const loginGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  let tokenService = inject(TokenserviceService);
  let storage = tokenService.getaccToken();
  if (storage && storage !== 'false') {
    router.navigateByUrl('layout/main');
    return false;
  }
  return true;
};
