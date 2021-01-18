package com.socialapp.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.socialapp.model.Post;

@Repository("postRepo")
@Transactional
public class PostRepo {
	private SessionFactory sesFact;
	
	@PersistenceContext
	private EntityManager em;
	
	public PostRepo() {
	}

	@Autowired
	public PostRepo(SessionFactory sesFact) {
		super();
		this.sesFact = sesFact;
	}

	public void insertPost(Post post) {
		sesFact.getCurrentSession().save(post);
	}

	public Post selectPostById(int id) {
		return sesFact.getCurrentSession().get(Post.class, id);
	}
	
	public List<Post> selectAllPosts() {
		System.out.println("in select all posts");
		return sesFact.getCurrentSession().createQuery("from Post", Post.class).list();
	}
	
	public void updatePost(int postId, int likes) {
		Post post = em.find(Post.class, postId);
		post.setLikes(likes);
		em.merge(post);
	}
}
