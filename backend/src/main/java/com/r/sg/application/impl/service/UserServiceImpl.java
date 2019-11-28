package com.r.sg.application.impl.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;
import com.r.sg.application.api.repository.UserRepository;
import com.r.sg.application.api.service.UserService;
import com.r.sg.application.models.UserVO;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;
	
	@Override
	public UserVO createUser(UserVO userVO) {
		return userRepository.save(userVO.toEntity()).toVO();
	}

	@Override
	public List<UserVO> findAllUsers() {
		// TODO Auto-generated method stub
		return Lists.newArrayList(userRepository.findAll())
			.stream()
			.map(user -> user.toVO())
			.collect(Collectors.toList());
	}

	
	
}
