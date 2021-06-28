/**
 * 
 */
package com.kamble.demo.basicAuth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * @author 1997s
 *
 */

@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http
				.csrf()
				.disable() // Disable cross site request forgery for put and post
		.authorizeRequests()
				.antMatchers(HttpMethod.OPTIONS, "/**")
				.permitAll() // For OPTIONS request let any url in
		.anyRequest().authenticated()
		.and()
				// .formLogin().and() Disable default form login
				.httpBasic(); // for every request apply basic auth
	}

}
