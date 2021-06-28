/**
 * 
 */
package com.kamble.demo.model;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author 1997s
 *
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Todo {

	private long id;
	private String description;
	private boolean done;
	private Date targetDate;
	
	
	//Remove method of list uses equals method to compare two objects
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Todo other = (Todo) obj;
		if (id != other.id)
			return false;
		return true;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}
	
	
}
