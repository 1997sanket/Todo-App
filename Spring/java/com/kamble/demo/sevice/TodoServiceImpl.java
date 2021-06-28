/**
 * 
 */
package com.kamble.demo.sevice;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.kamble.demo.model.Todo;

/**
 * @author 1997s
 *
 */

@Service
public class TodoServiceImpl implements TodoService {
	
	private static List<Todo> todos = new ArrayList<>();
	private static Long counter = 0L;
	
	static {
		todos.add(new Todo(++counter, "root", "Learn Angular", false, new Date()));
		todos.add(new Todo(++counter, "root", "Learn Spring", false, new Date()));
		todos.add(new Todo(++counter, "root", "Learn DSA", false, new Date()));
	}

	@Override
	public List<Todo> getAllTodos(String username) {
		
		return todos;	//returning hardcoded todos
	}

	@Override
	public Todo deleteById(String username, long id) {
		
		Todo t = findById(id);
		
		if(t != null) {
			todos.remove(t);
		}
		
		return t;
	}
	
	@Override
	public Todo findById(long id) {
		
		Todo t = todos.stream().filter(todo -> todo.getId() == id).findFirst().get();
		
		return t;
	}

	@Override
	public Todo save(Todo todo) {
		// TODO Auto-generated method stub
		
		if(todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++counter);
			todos.add(todo);
		} else {
			deleteById("sanket", todo.getId());
			todos.add(todo);
		}
		
		return todo;
	}

}
