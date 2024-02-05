
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id : number,
    public username : string,
    public description : string,
    public targetDate : Date,
    public done : boolean
    
  ){}
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {

  //todo array using todo class object 
  // todos = [
  //   new Todo(1,"Learn to Dance",false,new Date()),
  //   new Todo(2,"Become an Expert at Angular",false,new Date()),
  //   new Todo(3,"Visit India",false,new Date())
  // ]


  //ToDo Array 
  // todos = [
  //   {id : 1, description : 'Learn to Dance'},
  //   {id : 2, description :'Become an Expert at Angular'},
  //   {id : 3, description : 'Visit India'}
  // ]
  // todo = {
  //   id: '1',
  //   description : 'Learn to Dance'
  // }

  todos : Todo[] = []
  message : string = '';

  // constructor(public todoDataService :TodoDataService){}
  constructor(private todoDataService: TodoDataService,
    public router : Router
    ) { }
  // ...

  ngOnInit(){
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoDataService.retrieveAllTodos('mahenoor').subscribe(
      response=>{
        console.log(response);
        this.todos = response;
    })
  }
  deleteTodo(id : number){
    this.todoDataService.deleteTodo('mahenoor',id).subscribe(
      response =>{
        this.message = `Delete of todo ${id} is Successfull`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id:number){
    console.log( `update ${id}`)
    this.router.navigate(['todos',id])
  }

  AddTodo(){
    this.router.navigate(['todos',-1]);
  }
   
}
