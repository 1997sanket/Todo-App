/**
 * 
 */
package com.kamble.demo.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.kamble.demo.model.Todo;
import com.kamble.demo.sevice.TodoService;


/**
 * @author 1997s
 *
 */

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class TodoController {

	@Autowired
	private TodoService todoService;
	
	
	//Get all Todos for a User - users/{username}/todos
	@GetMapping("users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		
		return todoService.getAllTodos(username);
	}
	
	
	//Delete Todo by ID - users/{username}/todos/{id}
	@DeleteMapping("users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteMapping(@PathVariable String username, @PathVariable long id) {
		
		Todo t = todoService.deleteById(username, id);
		
		if(t!=null) {
			return new ResponseEntity<Void>(HttpStatus.OK);
		}
		
		else return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
	}
	
	
	@GetMapping("users/{username}/todos/{id}")
	public Todo getTodoById(@PathVariable String username, @PathVariable long id) {
		
		Todo t = todoService.findById(id);
		
		if(t != null) return t;
		
		else throw new RuntimeException("No such element exists");
	}
	
	@PutMapping("users/{username}/todos/{id}")
	public Todo updateTodo(@PathVariable String username, @RequestBody Todo todo) {
		
		return todoService.save(todo);
	}
	
	
	@PostMapping("users/{username}/todos")
	public ResponseEntity<Todo> saveTodo(@PathVariable String username, @RequestBody Todo todo) {
		
		Todo createdTodo = todoService.save(todo);
		
		//Passing the uri of newly created resource
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
		
	}
}
