package com.socialapp.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.persistence.metamodel.EntityType;
import javax.persistence.metamodel.Metamodel;

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
	
	


	//to use for login
	public User selectUserByEmail(String email) {
		CriteriaBuilder builder = em.getCriteriaBuilder();
		System.out.println(builder);
		CriteriaQuery<User> criteria = builder.createQuery(User.class);
		
		Metamodel m = em.getMetamodel();
		EntityType<User> User_ = m.entity(User.class);
		
		Root<User> userRoot = criteria.from(User.class);
		criteria.select( userRoot );
		System.out.println(User_);
		System.out.println(userRoot);
		
		
		criteria.where(builder.equal(userRoot.get("email"), email));
		
		//the resultset
		List<User> result = em.createQuery( criteria ).getResultList();
		return result.get(0);
	}
	
}
