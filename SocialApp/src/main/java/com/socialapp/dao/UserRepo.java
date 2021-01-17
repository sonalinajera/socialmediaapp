package com.socialapp.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.persistence.metamodel.EntityType;
import javax.persistence.metamodel.Metamodel;

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



	public User selectUserByEmail(String email) {
		List<User> userList = sesFact.getCurrentSession().createCriteria(User.class).add(Restrictions.ilike("email", email))
				.list();
		return userList.get(0);
	}
	
	public List<String> selectAllEmails() {
		
		return sesFact.getCurrentSession().createQuery("select email from User").list();
		
	}
}





