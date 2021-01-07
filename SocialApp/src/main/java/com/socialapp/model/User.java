package com.socialapp.model;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "user_id")
	private int userId;

	@Column(name = "username", length = 50, nullable = false, unique = true)
	private String username;

	@Column(name = "password", length = 50, nullable = false)
	private String password;

	@Column(name = "firstName", length = 30, nullable = false)
	private String firstName;

	@Column(name = "lastName", length = 30, nullable = false)
	private String lastName;

	@Column(name = "email", length = 30, nullable = false, unique = true)
	private String email;

	@Column(name = "picture", nullable = true)
	private byte[] picture;

	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	@OrderBy("post_date ASC")
	private List<Post> posts;

	public User() {
	}

	public User(String username, String password, String firstName, String lastName, String email, byte[] picture,
			List<Post> posts) {
		super();
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.picture = picture;
		this.posts = posts;
	}

	public User(int userId, String username, String password, String firstName, String lastName, String email,
			byte[] picture, List<Post> posts) {
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.picture = picture;
		this.posts = posts;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public byte[] getPicture() {
		return picture;
	}

	public void setPicture(byte[] picture) {
		this.picture = picture;
	}

	public List<Post> getPosts() {
		return posts;
	}

	public void setPosts(List<Post> posts) {
		this.posts = posts;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", username=" + username + ", password=" + password + ", firstName="
				+ firstName + ", lastName=" + lastName + ", email=" + email + ", picture=" + Arrays.toString(picture)
				+ ", posts=" + displayPosts(posts) + "]";
	}

	public String toStringPosts() {
		return "User [userId=" + userId + ", username=" + username + ", password=" + password + ", firstName="
				+ firstName + ", lastName=" + lastName + ", email=" + email + ", picture=" + Arrays.toString(picture)
				+ "]";
	}

	public String displayPosts(List<Post> posts) {
		StringBuilder out = new StringBuilder("");
		for (Post p : posts) {
			out.append(p.toStringUser());
		}
		return new String(out);
	}

}
