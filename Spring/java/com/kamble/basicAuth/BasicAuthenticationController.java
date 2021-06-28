/**
 * 
 */
package com.kamble.basicAuth;

/**
 * @author 1997s
 *
 */
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class BasicAuthenticationController {

	@GetMapping("basicAuth")
	public BasicAuthenticationBean helloWorld() {
		return new BasicAuthenticationBean("You are authenticated");
		
	}
}
