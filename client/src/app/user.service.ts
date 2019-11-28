import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/User';
import { UrlConstants } from './constants/urlConstants';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
    'Access-Control-Allow-Headers': 'Authorization, Lang'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = "localhost:8080/api/users";

  constructor( private http: HttpClient ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(UrlConstants.USERS_URL, httpOptions);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(UrlConstants.USERS_URL, user, httpOptions);
  }
}
