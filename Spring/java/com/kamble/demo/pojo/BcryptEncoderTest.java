/**
 * 
 */
package com.kamble.demo.pojo;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * @author 1997s
 *
 */
public class BcryptEncoderTest {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		for(int i=1; i<=10; i++) {
			String encodedString = encoder.encode("root");
			System.out.println(encodedString);
		}
		
		
	}

}
