import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorsService implements HttpInterceptor{

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = 'mahenoorahsan'
    let password = 'password'

    let basicHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    request= request.clone({
      setHeaders :{
        Authorization : basicHeaderString
      }
    })
    return next.handle(request);
  }
}
