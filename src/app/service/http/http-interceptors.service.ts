import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorsService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let username = 'mahenoorahsan'
    let password = 'password'

    let basicHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    req= req.clone({
      setHeaders :{
        Authorization : basicHeaderString
      }
    })
    return next.handle(req);
  }
}
