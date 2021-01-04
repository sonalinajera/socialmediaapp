package com.socialapp.controller;

import javax.servlet.http.HttpServletRequest;

import com.socialapp.dao.UserDao;
import com.socialapp.dao.UserDaoImpl;
import com.socialapp.util.ConstantUtils;

public class LoginController {
	
	private static UserDao userDao = new UserDaoImpl();
	
	/**
	 * Master login method
	 */
	public static String login(HttpServletRequest request) {
		
		// Put in logic to check if the user has correct credentials
		
		// Not useful, but tests if the backend can be called correctly
		try {
			userDao.selectAllUsers();
		} catch (Exception e){
			// Send user back to index if backend fails
			System.out.println("Select all users failed...");
			return ConstantUtils.URL_INDEX;
		}
		
		// Return to the users home page if they successfully log in
		System.out.println("Select all users succeeded!");
		return ConstantUtils.URL_INDEX;
	}
}
