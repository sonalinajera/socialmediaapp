package com.socialapp.controller;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.socialapp.model.User;

@RestController
public class SessionController {
	
	@GetMapping(value = "/getUser")
	public User getLoggedInUser(HttpSession session) {
		User currentUser = (User) session.getAttribute("loggedInUser");
		return currentUser;
	}

	@PostMapping(value = "/login")
	public String login(HttpSession session, @RequestBody User currentUser) {
		session.setAttribute("loggedInUser", currentUser);
		return "Login successful.";
	}

	@GetMapping(value = "/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "Logout successful";
	}
}
