import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {
  }

  authenticate(username :string, password :string){
    //console.log("before" + this.isUserLoggedIn())
    if(username === "mahenoorahsan" && password === "password"){
      sessionStorage.setItem('authenticatedUser', username);
      //console.log("after" + this.isUserLoggedIn())
      return true;}
    else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user== null)
  }
}
