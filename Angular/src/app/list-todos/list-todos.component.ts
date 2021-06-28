import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

//One TS file represents 1 module, so this class also comes under the current module
export class Todo {

  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ) {}
    
  
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo [];
  // [
  //   new Todo(1, 'Learn Java 8', false, new Date()),
  //   new Todo(2, 'Learn Design Patterns', false, new Date()),
  //   new Todo(3, 'Learn ANgular with SPring and JWT security', false, new Date())

  // ]

  constructor(private service : TodoDataService, private router : Router) { }

  ngOnInit() {
    this.refreshAllTodos();
  }

  refreshAllTodos() {
    this.service.getAllTodos('sanket').subscribe(
      data => {
        this.todos = data;
      }
    );
  }

  onDelete(id) {
    this.service.deleteById('sanket', id).subscribe(
      data => {
        this.refreshAllTodos();
      }
    );
  }


  onUpdate(id) {
    this.router.navigate(['todo', id]);
  }

  saveTodo() {
    this.router.navigate(['todo', -1])  //for new todo we are assigning id as -1
  }

}
