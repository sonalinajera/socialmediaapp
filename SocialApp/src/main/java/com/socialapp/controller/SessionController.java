package com.socialapp.controller;

import java.io.IOException;
import java.io.Writer;

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

//	@PostMapping(value = "/login")
//	public User login(HttpSession session, @RequestBody String email, Writer writer) throws IOException {
//		
//		writer.write(email);
//		
//		System.out.println(email);
//		User loggedUser = null;
//		//we need a getUserByEmailAndPassword method to call here
//		
//		loggedUser = userRepo.selectUserByEmail(email);
//		
//		//set the user to the session.
//		if(loggedUser != null) {
//			session.setAttribute("loggedInUser", loggedUser);
//		}
//		
//		System.out.println("User: " + loggedUser);
//		return loggedUser;
//	}
	

	@GetMapping(value = "/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "Logout successful";
	}
}
