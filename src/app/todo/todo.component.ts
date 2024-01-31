import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    private route : ActivatedRoute
  ){}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todoDataService.retrieveTodo('mahenoor',this.id).subscribe(
      response =>{
        this.todo = response;
      }
    )
  }
}
