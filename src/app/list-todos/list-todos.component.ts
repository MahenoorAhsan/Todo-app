import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export class Todo {
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {

  //todo array using todo class object 
  todos = [
    new Todo(1,"Learn to Dance",false,new Date()),
    new Todo(2,"Become an Expert at Angular",false,new Date()),
    new Todo(3,"Visit India",false,new Date())
  ]


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

  constructor(){}

  ngOnInit(){}

}
