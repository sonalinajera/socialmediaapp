package com.example;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.socialapp.dao.PostRepo;
import com.socialapp.dao.UserRepo;
import com.socialapp.model.Post;
import com.socialapp.model.User;

public class MainDriver {
	
	public static ApplicationContext appContext=
			new ClassPathXmlApplicationContext("applicationContext.xml");
	
	public static UserRepo userRepo = appContext.getBean("userRepo", UserRepo.class);
	public static PostRepo postRepo = appContext.getBean("postRepo", PostRepo.class);
	
	public static void main(String[] args) {
		ArrayList<Post> postList = new ArrayList<Post>();
		User user1 = new User("password", "firstname", "lastname", "email", null);
		User user2 = new User("password1", "firstname1", "lastname1", "email1", null);
		User user3 = new User("password2", "firstname2", "lastname2", "email2", null);
		User user4 = new User("password3", "firstname3", "lastname3", "email3", null);
		User user5 = new User("password4", "firstname4", "lastname4", "email4", null);

		Timestamp ts = new Timestamp(System.currentTimeMillis());
		Post post1 = new Post(ts, "first post", null, 0, user1);
		postList.clone();
		postList.add(post1);
		Post post2 = new Post(ts, "second post", null, 0, user2);
		postList.add(post2);
		Post post3 = new Post(ts, "third post", null, 0, user3);
		postList.add(post3);
		Post post4 = new Post(ts, "forth post", null, 0, user4);
		postList.add(post4);
		Post post5 = new Post(ts, "fifth post", null, 0, user5);
		postList.add(post5);
		user1.setPosts(postList);
		user2.setPosts(postList);
		user3.setPosts(postList);
		user4.setPosts(postList);
		user5.setPosts(postList);
		
		userRepo.insertUser(user1);
		userRepo.insertUser(user2);
		userRepo.insertUser(user3);
		userRepo.insertUser(user4);
		userRepo.insertUser(user5);
		
		postRepo.insertPost(post1);
		postRepo.insertPost(post2);
		postRepo.insertPost(post3);
		postRepo.insertPost(post4);
		postRepo.insertPost(post5);
		
		System.out.println("done");
		System.out.println(user1);
	}
	
}
