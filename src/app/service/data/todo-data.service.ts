import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';
import { Observable } from 'rxjs';


export const TODO_DATA_SERVICE_TOKEN = new InjectionToken<TodoDataService>('TodoDataService');
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  
  constructor(public http : HttpClient) { }

  retrieveAllTodos(username: string):Observable<Todo[]>{
    let op= this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
    console.log(op);
    return op;
  }
}
