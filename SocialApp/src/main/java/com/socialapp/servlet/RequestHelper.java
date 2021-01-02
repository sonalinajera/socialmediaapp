package com.socialapp.servlet;

import javax.servlet.http.HttpServletRequest;

import com.socialapp.controller.LoginController;
import com.socialapp.util.ConstantUtils;
import com.socialapp.util.GeneralUtils;

/**
 * RequestHelper class
 */
public class RequestHelper {

	/**
	 * Process the uri's and pass to controllers
	 */
	public static String process(HttpServletRequest request) {
		String uri = GeneralUtils.getUriWithoutProjectName(request);
		System.out.println(uri);
		
		switch (uri) {

		// -- Account forwards -- //
		case ConstantUtils.FORWARD_LOGIN:
			return LoginController.login(request);

		// -- Default send to index -- //
		default:
			return ConstantUtils.URL_INDEX;
		}
	}
}
