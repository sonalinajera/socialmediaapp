package com.socialapp.controller;

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
		postRepo.insertPost(incomingPost);
		return "Success!";
	}

	@GetMapping(value = "/getAllPosts")
	public List<Post> getAllPosts() {
		return postRepo.selectAllPosts();
	}

	@GetMapping(value = "/getPostById/{id}")
	public Post getPostById(@PathVariable("id") int id) {
		return postRepo.selectPostById(id);
	}
}
