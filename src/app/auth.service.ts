import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogged, ILogged as string } from './core/interface/loggedUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  private loginStatus = new BehaviorSubject<boolean>(this.checkinLogStatus());
  private username = new BehaviorSubject<string>(localStorage.getItem('username'));
  private userId = new BehaviorSubject<string>(localStorage.getItem('id'));

  register$(userData: { username: String, email: String, password: String }): Observable<ILogged> {
    return this.httpClient
      .post<ILogged>(`${environment.apiUrl}/users/register`, userData)
      .pipe(tap(user => {
        this.loginStatus.next(true);
        localStorage.setItem('authToken', user.accessToken);
        localStorage.setItem('username', user.username);
        localStorage.setItem('id', user._id);
        this.username.next(localStorage.getItem('username'));
        this.userId.next(localStorage.getItem('id'));

      }));
  }

  login$(userData: { email: String, password: String }): Observable<ILogged> {
    return this.httpClient
      .post<ILogged>(`${environment.apiUrl}/users/login`, userData)
      .pipe(tap(user => {
        this.loginStatus.next(true);
        localStorage.setItem('authToken', user.accessToken);
        localStorage.setItem('username', user.username);
        localStorage.setItem('id', user._id);
        this.username.next(localStorage.getItem('username'));
        this.userId.next(localStorage.getItem('id'));

      }));
  }

  logout(): void {
    this.loginStatus.next(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('id');
    localStorage.removeItem('username');

  }

  checkinLogStatus(): boolean {
    return false;
  }

  get isLoggedIn() {
    return this.loginStatus.asObservable();
  }

  get currentUserName() {
    return this.username.asObservable();
  }

  get currentUserId() {
    return this.userId.asObservable();
  }
}