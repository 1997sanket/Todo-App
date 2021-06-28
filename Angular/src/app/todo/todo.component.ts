import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo : Todo = new Todo(1, '', false, new Date()); //This is important(or else we get erros in console) because onInit() todo does not have any object, it only gets after subscribe is executed
  error;

  constructor(private route : ActivatedRoute, 
              private service : TodoDataService,
              private router : Router) { }

  ngOnInit() {
    this.todo.id = this.route.snapshot.params['id'];

    //If new todo then dont populate from database
    if(this.todo.id != -1) {
      this.populateInputFields(this.todo.id);
    }
   
  }

  populateInputFields(id) { 
    this.service.getTodoById(id, sessionStorage.getItem('authenticatedUser')).subscribe(
      
      data => {
        this.todo = data;
      },

      error => {
          this.error = error.error.message;
      }
    );
  }

  saveTodo() {

    //If updating a todo then do this 
    if(this.todo.id != -1) {
      this.service.updateTodo(sessionStorage.getItem('authenticatedUser'), this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      );
  
    } else if(this.todo.id == -1){

      this.service.createTodo(sessionStorage.getItem('authenticatedUser'), this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      );
    }
    
    
  }

}
