import { HTTP_INTERCEPTORS, HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map}  from 'rxjs'
import { API_URL } from '../app.constants';


export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationofTodoService {

  constructor(private http :HttpClient){ }

  executedAuthenticationService(username :string, password :string) {
    let basicAuthHeadersString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeadersString
  })

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,{ headers }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER , username);
          sessionStorage.setItem(TOKEN , basicAuthHeadersString);
          return data;
        }
      )
    );
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(){
    let user = this.getAuthenticatedUser;
    if(user!==null){
      return sessionStorage.getItem(TOKEN);
    }
    return;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN );
  }

  
}
export class AuthenticationBean{
  constructor(public message : string){

  }
}
