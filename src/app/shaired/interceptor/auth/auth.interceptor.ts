import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { TokenserviceService } from '../../service/tokenservice/tokenservice.service';
import { ReftokenService } from 'src/app/auth/service/reftoken/reftoken.service';
import { LogoutService } from 'src/app/layout/service/logout/logout.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenserviceService,
    private refreshService: ReftokenService,
    private logout: LogoutService,
    private router:Router
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authToken = this.tokenService.getaccToken();

    // Clone the request and set the Authorization header
    if (authToken) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${authToken}`)
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 || error.status === 403) {
          return this.refreshService.refreshtoken().pipe(
            switchMap((res: any) => {
              const newAccessToken = res.access.token;
              const newRefreshToken = res.refresh.token;
              this.tokenService.saveaccToken(newAccessToken);
              this.tokenService.saverefToken(newRefreshToken);

              request = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${newAccessToken}`)
              });
              return next.handle(request);
            }),
            catchError(() => {
              this.logout.logout();
              this.router.navigateByUrl('/auth/login');
              return throwError(() => new Error('Unauthorized'));
            })
          );
        }
        return throwError(() => error);
      })
    );
  }
}
