import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from './interface';

@Injectable()
export class UserService {
  currentUser: IUser;

  get isLogged(){
    return !!this.currentUser;
  }

  constructor(private httpClient: HttpClient) { }

  register$(userData: {username: String, email: String, password: String}): Observable<IUser>{
    return this.httpClient.post<IUser>(`${environment.apiUrl}/users/register`, userData)
  }

  login$(userData:{email: String, password: String}): Observable<IUser>{
    return this.httpClient
    .post<IUser>(`${environment.apiUrl}/users/login`, userData)
    .pipe(tap(user => this.currentUser = user))
  }
}

