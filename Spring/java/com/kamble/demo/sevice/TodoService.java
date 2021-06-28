/**
 * 
 */
package com.kamble.demo.sevice;

import java.util.List;

import com.kamble.demo.model.Todo;

/**
 * @author 1997s
 *
 */
public interface TodoService {
	
	List<Todo> getAllTodos(String username);

	Todo deleteById(String username, long id);

	Todo findById(long id);
	
	Todo save(Todo todo);

}
