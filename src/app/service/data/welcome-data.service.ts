import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export  class HelloWorldBean{
  constructor(public message : string){ 
  }
}

@Injectable({
  providedIn: 'root'
})


export class WelcomeDataService {

  constructor(public http : HttpClient) { }

  executedHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executedHelloWorldServiceWithPathVariable(name:string) {
    let basicAuthHeadersString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeadersString
  });

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,{ headers });
  }

  createBasicAuthenticationHttpHeader(){
    let username = 'mahenoorahsan'
    let password = 'password'

    let basicHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicHeaderString;
  }
}
