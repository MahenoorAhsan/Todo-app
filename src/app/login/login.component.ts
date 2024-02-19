import { response } from 'express';
import { BasicAuthenticationofTodoService } from './../service/basic-authenticationof-todo.service';
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

  username = 'mahenoorahsan'
  password = 'password'
  errorMessage = 'invalid credentials'
  invalidLogin = false

  constructor(private router : Router,
    private hardcodedAuthenticatedService : HardcodedAuthenticationService,
    public basicAuthenticationofTodoService : BasicAuthenticationofTodoService
    ) {

  }
  ngOnInit(){

  }

  handlelogin(){
    // console.log("this is username" , this.username);
    // console.log("this is password" ,this.password);
    // if(this.username === "mahenoorahsan" && this.password === "password"){
    if(this.hardcodedAuthenticatedService.authenticate(this.username,this.password)){
      console.log(this.router.navigate(['welcome', this.username]));
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }
  }


  handleBasicAuthLogin() {
    // console.log(this.username);
    //if(this.username==="in28minutes" && this.password === 'dummy') {
    this.basicAuthenticationofTodoService.executedAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false      
          },
          error => {
            console.log(error)
            this.invalidLogin = true
          }
        )
  }
}