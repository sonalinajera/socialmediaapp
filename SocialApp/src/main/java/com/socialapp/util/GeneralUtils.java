package com.socialapp.util;

import javax.servlet.http.HttpServletRequest;

/**
 * Some general static methods to make operations easier
 */
public class GeneralUtils {
	/**
	 * This method removes the project name from the uri and returns it as a string.
	 */
	public static String getUriWithoutProjectName(HttpServletRequest request) {
		return request.getRequestURI().substring(ConstantUtils.PROJECT_NAME.length());
	}
}
