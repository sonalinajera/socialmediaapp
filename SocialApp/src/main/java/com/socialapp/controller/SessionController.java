package com.socialapp.controller;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.socialapp.dao.UserRepo;
import com.socialapp.model.User;

@RestController
@CrossOrigin(origins = "*")
public class SessionController {
	
	
	
	
	@GetMapping(value = "/getUser")
	public User getLoggedInUser(HttpSession session) {
		User currentUser = (User) session.getAttribute("loggedInUser");
		return currentUser;
	}

	@PostMapping(value = "/login")
	public User login(HttpSession session, @RequestBody User currentUser) {
		User loggedUser = null;
		//we need a getUserByEmailAndPassword method to call here
		UserRepo userRepo = new UserRepo();
		loggedUser = userRepo.selectUserByEmailAndPassword(currentUser.getEmail(), currentUser.getPassword());
		
		if(loggedUser != null) {
			session.setAttribute("loggedInUser", loggedUser);
		}
		

		System.out.println("User: " + currentUser);
		return loggedUser;
	
	}

	@GetMapping(value = "/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "Logout successful";
	}
}
