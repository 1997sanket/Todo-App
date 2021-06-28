import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JPA_API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http : HttpClient) { }

  getAllTodos(username) {
    return this.http.get<Todo[]>(`${JPA_API_URL}/users/${username}/todos`);
  }

  deleteById(username, id) {
    return this.http.delete(`${JPA_API_URL}/users/${username}/todos/${id}`);
  }

  getTodoById(id, username) {
    return this.http.get<Todo>(`${JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, todo : Todo) {
    return this.http.put(`${JPA_API_URL}/users/${username}/todos/${todo.id}`, todo);
  }

  createTodo(username, todo : Todo) {
    return this.http.post(`${JPA_API_URL}/users/${username}/todos`, todo);
  }
}
