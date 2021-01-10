package com.socialapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.socialapp.dao.UserRepo;
import com.socialapp.model.User;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class UserController {
	
	private UserRepo userRepo;
	
	public UserController() {
	}
	
	@Autowired
	public UserController(UserRepo userRepo) {
		this.userRepo = userRepo;
	}

	@PostMapping(value = "/createUser")
	public String createNewUser(@RequestBody User incomingUser) {
		userRepo.insertUser(incomingUser);
		return "Success!";
	}
	
	@GetMapping(value = "/getAllUsers")
	public List<User> getAllUsers() {
		return userRepo.selectAllUsers();
	}
	
	@GetMapping(value = "/getUserById/{id}")
	public User getUserById(@PathVariable("id") int id) {
		return userRepo.selectUserById(id);
	}
	
//	@GetMapping(value = "/getUserByEmailAndPassword")
}
