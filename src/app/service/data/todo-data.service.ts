import { Todo } from './../../list-todos/list-todos.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  
  constructor(public http : HttpClient) { }

  retrieveAllTodos(username: string):Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodo(username:string , id: number){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  retrieveTodo(username:string , id: number): Observable<Todo>{
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username : string , id:number,todo : Todo) {
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,todo , {withCredentials:true});
  }

  createTodo(username :string ,todo : Todo){
    return this.http.post(`http://localhost:8080/users/${username}/todos`,todo);
  }

}
