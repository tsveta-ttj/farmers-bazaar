import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import {  Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus$: Observable<boolean>;
  username$: Observable<string>;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginStatus$ = this.authService.isLoggedIn;
    this.username$ = this.authService.currentUserName;
  }

  logoutHandler(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
