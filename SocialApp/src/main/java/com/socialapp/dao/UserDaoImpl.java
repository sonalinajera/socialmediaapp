package com.socialapp.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.socialapp.model.User;
import com.socialapp.util.HibernateUtil;

public class UserDaoImpl implements UserDao {

	/**
	 * Inserts a new user into the database.
	 */
	@Override
	public void insertUser(User user) {
		// Get global session and begin transaction
		Session ses = HibernateUtil.getSession();
		Transaction tx = ses.beginTransaction();

		// Add the user to the database
		ses.save(user);

		// Commit changes
		tx.commit();
	}

	/**
	 * Updates all user information in the database.
	 */
	@Override
	public void updateUser(User user) {
		// Get global session and begin transaction
		Session ses = HibernateUtil.getSession();
		Transaction tx = ses.beginTransaction();

		// Update the user's information
		ses.saveOrUpdate(user);

		// Commit changes
		tx.commit();
	}

	@Override
	public List<User> selectAllUsers() {
		// Get global session
		Session ses = HibernateUtil.getSession();

		// Get all users
		List<User> userList = ses.createQuery("from User", User.class).list();

		return userList;
	}

	@Override
	public User selectUserById(int userId) {
		// Get global session
		Session ses = HibernateUtil.getSession();

		// Get user with given id
		User user = ses.get(User.class, userId);

		return user;
	}

	@Override
	public User selectUserByUsername(String username) {
		// Get global session
		Session ses = HibernateUtil.getSession();

		// Get user with given username
		User user = ses.get(User.class, username);

		return user;
	}

	@Override
	public User selectUserByEmail(String email) {
		// Get global session
		Session ses = HibernateUtil.getSession();

		// Get user with given email
		User user = ses.get(User.class, email);

		return user;
	}

}
