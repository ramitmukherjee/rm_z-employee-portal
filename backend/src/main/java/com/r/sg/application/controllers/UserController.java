package com.r.sg.application.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.collect.Lists;
import com.r.sg.application.api.service.UserService;
import com.r.sg.application.models.UserVO;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"})
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	UserService userService;
	
	@GetMapping
	public List<UserVO> getUsers() {
		
		return Lists.newArrayList(userService.findAllUsers());
	}
	
	@PostMapping
	public UserVO createUser(@RequestBody UserVO user) {
		return userService.createUser(user);
	}
	
}
