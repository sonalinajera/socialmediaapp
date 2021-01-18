package com.socialapp.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.socialapp.model.User;

@Repository("userRepo")
@Transactional
public class UserRepo {
	private SessionFactory sesFact;
	
	@PersistenceContext
	private EntityManager em;

	public UserRepo() {
	}

	@Autowired
	public UserRepo(SessionFactory sesFact) {
		super();
		this.sesFact = sesFact;
		
	}

	public void insertUser(User user) {
		sesFact.getCurrentSession().save(user);
	}

	public User selectUserById(int id) {
		return sesFact.getCurrentSession().get(User.class, id);
	}

	public List<User> selectAllUsers() {
		return sesFact.getCurrentSession().createQuery("from User", User.class).list();
	}
	
	public void updateUserEmail(int id, String email) {
		User user = em.find(User.class, id);
		user.setEmail(email);
		em.merge(user);
		
	}


	public User selectUserByEmail(String email) {
		List<User> userList = sesFact.getCurrentSession().createCriteria(User.class).add(Restrictions.ilike("email", email))
				.list();
		return userList.get(0);
	}
	
	public List<String> selectAllEmails() {
		
		return sesFact.getCurrentSession().createQuery("select email from User").list();
		
	}
	
	public void updateUserPassword(String userEmail,String hashedPassword) {
		User user = selectUserByEmail(userEmail);
		user.setPassword(hashedPassword);
		sesFact.getCurrentSession().save(user);
	}
}





