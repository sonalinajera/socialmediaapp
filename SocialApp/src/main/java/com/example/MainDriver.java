package com.example;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import com.socialapp.model.Post;
import com.socialapp.model.User;

public class MainDriver {
	
	public static void main(String[] args) {
		List<Post> postList = new ArrayList<Post>();
		User user1 = new User("password", "firstname", "lastname", "email", null, postList);
		User user2 = new User("password1", "firstname1", "lastname1", "email1", null, postList);
		User user3 = new User("password2", "firstname2", "lastname2", "email2", null, postList);
		User user4 = new User("password3", "firstname3", "lastname3", "email3", null, postList);
		User user5 = new User("password4", "firstname4", "lastname4", "email4", null, postList);

		Timestamp ts = Timestamp.valueOf("");
		Post post1 = new Post(ts, "first post", null, 0, user1);
		Post post2 = new Post(ts, "second post", null, 0, user2);
		Post post3 = new Post(ts, "third post", null, 0, user3);
		Post post4 = new Post(ts, "forth post", null, 0, user4);
		Post post5 = new Post(ts, "fifth post", null, 0, user5);
	}
	
}
