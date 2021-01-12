package com.socialapp.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.socialapp.model.User;

@Repository("userRepo")
@Transactional
public class UserRepo {
	private SessionFactory sesFact;
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
	
	public User selectUserByEmailAndPassword(String email, String password) {
		String hql = "FROM USERS U WHERE email = :email, password = :password";
		
		return (User) sesFact.getCurrentSession().createQuery(hql).setParameter("password", password).setParameter("email", email).getSingleResult();
			
	}
	
	
	
	
	
	
	
}
