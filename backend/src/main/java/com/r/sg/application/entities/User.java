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
	private String emailId;
	private Calendar joiningDate;
	private Integer ctc;

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
		User other = (User) obj;
		if (emailId == null) {
			if (other.emailId != null)
				return false;
		} else if (!emailId.equals(other.emailId))
			return false;
		return true;
	}

	public UserVO toVO() {
		
		UserVO userVO = new UserVO();
		
		userVO.setId(getId());
		userVO.setFirstName(firstName);
		userVO.setLastName(lastName);
		userVO.setEmailId((emailId));
		userVO.setCtc(ctc);
		userVO.setJoiningDate(joiningDate);
		
		return userVO;
	}
}
