package com.kamble.demo.helloWorld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class HelloWorld {

	@GetMapping("hello")
	public HelloWorldBean helloWorld() {
		return new HelloWorldBean("Hello World");
		
	}
}
