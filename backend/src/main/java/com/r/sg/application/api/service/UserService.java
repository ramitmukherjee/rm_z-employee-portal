package com.r.sg.application.api.service;

import java.util.List;

import com.r.sg.application.models.UserVO;

public interface UserService {
	
	public UserVO createUser( UserVO user );
	
	public List<UserVO> findAllUsers();
	
}
