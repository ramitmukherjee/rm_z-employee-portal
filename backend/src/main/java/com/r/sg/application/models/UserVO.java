package com.r.sg.application.models;
import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.NamedQuery;

import org.springframework.data.jpa.domain.AbstractPersistable;

import com.r.sg.application.entities.User;

public class UserVO {

	private Long id;
	
	private String firstName;
	private String lastName;
	private String gender;
	private Calendar dateOfBirth;
	private String department;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Calendar getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(Calendar dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public User toEntity() {
		User user = new User();
		
		user.setFirstName(firstName);
		user.setLastName(lastName);
		user.setGender((gender));
		user.setDateOfBirth(dateOfBirth);
		user.setDepartment(department);
		
		return user;
	}
	
}