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
	private String emailId;
	private Calendar joiningDate;
	private Integer ctc;
	
	
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
	public Calendar getJoiningDate() {
		return joiningDate;
	}
	public void setJoiningDate(Calendar joiningDate) {
		this.joiningDate = joiningDate;
	}
	public Integer getCtc() {
		return ctc;
	}
	public void setCtc(Integer ctc) {
		this.ctc = ctc;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((emailId == null) ? 0 : emailId.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		UserVO other = (UserVO) obj;
		if (emailId == null) {
			if (other.emailId != null)
				return false;
		} else if (!emailId.equals(other.emailId))
			return false;
		return true;
	}
	
	public User toEntity() {
		User user = new User();
		
		user.setFirstName(firstName);
		user.setLastName(lastName);
		user.setEmailId((emailId));
		user.setCtc(ctc);
		user.setJoiningDate(joiningDate);
		
		return user;
	}
	
}