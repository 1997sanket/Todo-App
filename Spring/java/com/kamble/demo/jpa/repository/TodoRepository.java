package com.kamble.demo.jpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kamble.demo.model.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {

	List<Todo> findByUsername(String username);
}
