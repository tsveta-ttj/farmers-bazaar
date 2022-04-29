import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  loginStatus: boolean

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean | UrlTree {
    this.authService.isLoggedIn.subscribe(state => this.loginStatus = state);

    if (this.loginStatus) {
      return true;

    }
    return this.router.createUrlTree(['/login']);
  }
}
