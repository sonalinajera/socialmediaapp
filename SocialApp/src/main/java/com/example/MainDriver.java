package com.example;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import com.socialapp.model.Post;
import com.socialapp.model.User;

public class MainDriver {
	
	public static void main(String[] args) {
		List<Post> postList = new ArrayList<Post>();
		User user1 = new User("", "", "", "", "", "".getBytes(), postList);
		User user2 = new User("", "", "", "", "", "".getBytes(), postList);
		User user3 = new User("", "", "", "", "", "".getBytes(), postList);
		User user4 = new User("", "", "", "", "", "".getBytes(), postList);
		User user5 = new User("", "", "", "", "", "".getBytes(), postList);

		Timestamp ts = Timestamp.valueOf("");
		Post post1 = new Post(ts, "", "".getBytes(), 0, user1);
		Post post2 = new Post(ts, "", "".getBytes(), 0, user2);
		Post post3 = new Post(ts, "", "".getBytes(), 0, user3);
		Post post4 = new Post(ts, "", "".getBytes(), 0, user4);
		Post post5 = new Post(ts, "", "".getBytes(), 0, user5);
	}
	
}
