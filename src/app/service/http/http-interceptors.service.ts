import { BasicAuthenticationofTodoService } from './../basic-authenticationof-todo.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorsService implements HttpInterceptor{

  constructor(
    public basicAuthenticationofTodoService : BasicAuthenticationofTodoService,
  ) { }

  
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'mahenoorahsan'
    // let password = 'password'

    // let basicHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let basicHeaderString = this.basicAuthenticationofTodoService.getAuthenticatedToken();
    let username = this.basicAuthenticationofTodoService.getAuthenticatedUser();
    if(username && basicHeaderString){
      request= request.clone({
        setHeaders :{
          Authorization : basicHeaderString
        }
      })
    }
    return next.handle(request);
  }
}
