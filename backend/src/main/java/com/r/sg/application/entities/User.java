package com.r.sg.application.entities;

import java.util.Calendar;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.AbstractPersistable;

import com.r.sg.application.models.UserVO;

@Entity(name = "User")
@Table(name = "User")
public class User extends AbstractPersistable<Long> {
	private String firstName;
	private String lastName;
	private String gender;
	private Calendar dateOfBirth;
	private String department;

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

	public String getEmailId() {
		return gender;
	}

	public void setEmailId(String emailId) {
		this.gender = emailId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((gender == null) ? 0 : gender.hashCode());
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
		User other = (User) obj;
		if (gender == null) {
			if (other.gender != null)
				return false;
		} else if (!gender.equals(other.gender))
			return false;
		return true;
	}

	public UserVO toVO() {
		
		UserVO userVO = new UserVO();
		
		userVO.setId(getId());
		userVO.setFirstName(firstName);
		userVO.setLastName(lastName);
		userVO.setGender((gender));
		userVO.setDepartment(department);
		userVO.setDateOfBirth(dateOfBirth);
		
		return userVO;
	}
}
