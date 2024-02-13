import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { response } from 'express';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{

  id : number =0;
  username : string ='';
  todo: Todo = new Todo(this.id,this.username, '', new Date(),false);

  constructor(
    private todoDataService :TodoDataService ,
    private route : ActivatedRoute,
    private router : Router
  ){}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // this.todo = new Todo
    if(this.id!=-1){
      this.todoDataService.retrieveTodo('mahenoor',this.id).subscribe(
        response =>{
          this.todo = response;
        }
      )
    }
  }

  saveTodo(){
    if(this.id == -1){
      this.todoDataService.createTodo('mahenoor' , this.todo).subscribe(
        data=>{
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }
    else{
      this.todoDataService.updateTodo('mahenoor' , this.id ,this.todo).subscribe(
        response =>{
          console.log(response)
          this.router.navigate(['todos'])
        }
      )
    }
  }
}
