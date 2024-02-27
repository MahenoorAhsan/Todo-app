import { Todo } from './../../list-todos/list-todos.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  
  constructor(public http : HttpClient) { }

  retrieveAllTodos(username: string):Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username:string , id: number){
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username:string , id: number): Observable<Todo>{
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username : string , id:number,todo : Todo) {
    console.log(id +" "+todo);
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`,todo);
  }

  createTodo(username :string ,todo : Todo){
    return this.http.post(`${API_URL}/users/${username}/todos`,todo);
  }

}
