import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http : HttpClient) { }

  getAllTodos(username) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteById(username, id) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  getTodoById(id, username) {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username, todo : Todo) {
    return this.http.put(`http://localhost:8080/users/${username}/todos/${todo.id}`, todo);
  }

  createTodo(username, todo : Todo) {
    return this.http.post(`http://localhost:8080/users/${username}/todos`, todo);
  }
}
