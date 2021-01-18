package com.socialapp.controller;

import java.io.IOException;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
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

	private UserRepo userRepo;

	public SessionController() {

	}

	@Autowired
	public SessionController(UserRepo userRepo) {
		super();
		this.userRepo = userRepo;
	}

	@GetMapping(value = "/getUser")
	public User getLoggedInUser(HttpSession session) {
		User currentUser = (User) session.getAttribute("loggedInUser");
		return currentUser;
	}
	
	

	@PostMapping(value = "/login")
	public User login(HttpSession session, @RequestBody User user) throws IOException {

		// we need a getUserByEmailAndPassword method to call here
		System.out.println(user.getEmail());
		System.out.println(user);
		System.out.println("logged in user: " + userRepo.selectUserByEmail(user.getEmail()));
		User loggedinUser = userRepo.selectUserByEmail(user.getEmail());
		// set the user to the session.
		if (loggedinUser != null) {
			session.setAttribute("loggedInUser", loggedinUser);
		}

	return loggedinUser;

	}

	@GetMapping(value = "/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "Logout successful";
	}
}
