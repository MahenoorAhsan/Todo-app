import { HTTP_INTERCEPTORS, HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map}  from 'rxjs'

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

    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,{ headers }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticaterUser' , username);
          return data;
        }
      )
    );
  }


  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
  
}
export class AuthenticationBean{
  constructor(public message : string){

  }
}
