import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem('authToken');

    if (idToken) {
      const cloned = request.clone({
        setHeaders: {
          'x-authorization': idToken,
          'Content-Type': 'application/json'
        }
      });

      return next.handle(cloned);
    } else {

      return next.handle(request);

    }
  }

}
