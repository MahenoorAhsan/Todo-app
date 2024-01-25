import { routes } from './../app.routes';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  username = ''
  password = ''
  errorMessage = 'invalid credentials'
  invalidLogin = false

  constructor(private router : Router,
    private hardcodedAuthenticatedService : HardcodedAuthenticationService
    ) {

  }
  ngOnInit(){

  }

  handlelogin(){
    // console.log("this is username" , this.username);
    // console.log("this is password" ,this.password);
    // if(this.username === "mahenoorahsan" && this.password === "password"){
    if(this.hardcodedAuthenticatedService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }
  }
}
