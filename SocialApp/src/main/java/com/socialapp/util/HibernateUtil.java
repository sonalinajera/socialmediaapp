package com.socialapp.util;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {
	// Configuration of session factory
	private static SessionFactory sf = new Configuration()
			.configure("hibernate.cfg.xml").buildSessionFactory();
	
	// Global session object
	private static Session ses;
	
	/**
	 * Use this method to get the global session object. Creates
	 * a new one if it does not already exist.
	 * @return
	 */
	public static Session getSession() {
		if (ses == null) {
			ses = sf.openSession();
		}
		return ses;
	}
	
	/**
	 * Closes the session and the session factory. Call at the end 
	 * of the application.
	 */
	public static void closeSession() {
		ses.close();
		ses = null;
		sf.close();
	}
}
