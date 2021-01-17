package com.socialapp.controller;

import java.sql.Timestamp;
import java.time.LocalDateTime;
//import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.socialapp.dao.PostRepo;
import com.socialapp.model.Post;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PostController {
	private PostRepo postRepo;

	public PostController() {
	}

	@Autowired
	public PostController(PostRepo postRepo) {
		this.postRepo = postRepo;
	}

	@PostMapping(value = "/createPost")
	public String createNewPost(@RequestBody Post incomingPost) {
		Post newPost = new Post(incomingPost.getPostId(),Timestamp.valueOf(LocalDateTime.now()),incomingPost.getMessage(),incomingPost.getPostPicURL(),0,incomingPost.getUser());
		postRepo.insertPost(newPost);
		return "Success!";
	}

	@GetMapping(value = "/getAllPosts")
	public List<Post> getAllPosts() {
		System.out.println("in get all posts");
		return postRepo.selectAllPosts();
	}

	@GetMapping(value = "/getPostById/{id}")
	public Post getPostById(@PathVariable("id") int id) {
		return postRepo.selectPostById(id);
	}
}
