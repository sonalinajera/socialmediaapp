package com.socialapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.socialapp.dao.UserRepo;
import com.socialapp.model.User;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
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
		System.out.println(incomingUser);
		User newUser = new User(incomingUser.getPassword(),incomingUser.getFirstName(),incomingUser.getLastName(),incomingUser.getEmail(),incomingUser.getProfilePicURL());
		userRepo.insertUser(newUser);
		return "Success!";
	}
	
	@PostMapping(value="/updateUser")
	public String updateUser(@RequestBody User incomingUser) {
		System.out.println(incomingUser);
		String userEmail = incomingUser.getEmail();
		String hashedPassword = incomingUser.getPassword();
		userRepo.updateUserPassword(userEmail, hashedPassword);
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
	
	
	@GetMapping(value = "/getAllEmails")
	public List<String> getAllEmails() {
		System.out.println("test");
		System.out.println(userRepo.selectAllEmails());
		return userRepo.selectAllEmails();
	}
	
	@PutMapping(value = "/updateEmail")
	public String updateUserEmail(@RequestBody User user) {
		System.out.println(user.getUserId() + " " + user.getEmail());
		userRepo.updateUserEmail(user.getUserId(), user.getEmail());
		return user.getEmail();
	}
	
	@PostMapping(value = "/updatePic")
	public void updateUserProfilePic(@RequestBody User user) {
		System.out.println(user.getUserId() + " " + user.getEmail());
		userRepo.updateUserProfilePicURL(user.getEmail(), user.getProfilePicURL());
	}

}
