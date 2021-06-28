/**
 * 
 */
package com.kamble.demo.jpa.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.kamble.demo.jpa.repository.TodoRepository;
import com.kamble.demo.model.Todo;


/**
 * @author 1997s
 *
 */

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class TodoJPAController {

	@Autowired
	private TodoRepository todoRepository;
	
	
	//Get all Todos for a User - users/{username}/todos
	@GetMapping("jpa/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		System.out.println(username);
		return todoRepository.findByUsername(username);
	}
	
	
	//Delete Todo by ID - users/{username}/todos/{id}
	@DeleteMapping("jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteMapping(@PathVariable String username, @PathVariable long id) {
		
		todoRepository.deleteById(id);
		
		return ResponseEntity.noContent().build();
	}
	
	
	@GetMapping("jpa/users/{username}/todos/{id}")
	public Todo getTodoById(@PathVariable String username, @PathVariable long id) {
		
		return todoRepository.findById(id).get();
	}
	
	@PutMapping("jpa/users/{username}/todos/{id}")
	public Todo updateTodo(@PathVariable String username, @RequestBody Todo todo) {
		
		Todo t = todoRepository.save(todo);
		
		return t;
	}
	
	
	@PostMapping("jpa/users/{username}/todos")
	public ResponseEntity<Todo> saveTodo(@PathVariable String username, @RequestBody Todo todo) {
		
		todo.setUsername(username);
		System.out.println("In post Mapping " + todo);
		Todo createdTodo = todoRepository.save(todo);
		
		//Passing the uri of newly created resource
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
		
	}
}
