import { response } from 'express';
import { CommonModule } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ListTodosComponent } from '../list-todos/list-todos.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { error } from 'console';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, ListTodosComponent,RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{

  message = 'Some Welcome Message'
  welcomeMessageFromService:string =''
  name : string =''

  constructor(public route : ActivatedRoute,
    public service: WelcomeDataService
    ){}

  ngOnInit(): void {
    console.log(this.message);
    this.name = this.route.snapshot.params['name'];
    this.welcomeMessageFromService = '';
  }


  getWelcomeMessage(){
    console.log(this.service.executedHelloWorldBeanService().subscribe());
    this.service.executedHelloWorldBeanService().subscribe(
      data=> this.handleSuccessfulResponse(data),
      error => this.handleErrorResponse(error.error)
    );

  }

  handleSuccessfulResponse(response : any){
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(error:any){
    this.welcomeMessageFromService= error.message
  }

  getWelcomeMessageWithParameter(){
    this.service.executedHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error.error)
    )
  }

}
