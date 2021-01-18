package com.socialapp.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "users")
public class User implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "user_id")
	private int userId;


	@Column(name = "password", length = 100, nullable = false)
	private String password;

	@Column(name = "firstName", length = 30, nullable = false)
	private String firstName;

	@Column(name = "lastName", length = 30, nullable = false)
	private String lastName;

	@Column(name = "email", length = 30, nullable = false, unique = true)
	private String email;

	@Column(name = "profilePicURL", nullable = true)
	private String profilePicURL;

	@OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
	@JsonManagedReference
	@OrderBy("post_date ASC")
	private List<Post> posts;

	public User() {
	}
	
	

	public User(int userId, String password, String firstName, String lastName, String email, String profilePicURL,
			List<Post> posts) {
		super();
		this.userId = userId;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.profilePicURL = profilePicURL;
		this.posts = posts;
	}

	

	public User(String password, String firstName, String lastName, String email, String profilePicURL,
			List<Post> posts) {
		super();
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.profilePicURL = profilePicURL;
		this.posts = posts;
	}

	

	public User(String password, String firstName, String lastName, String email, String profilePicURL) {
		super();
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.profilePicURL = profilePicURL;
	}

	

	public int getUserId() {
		return userId;
	}



	public void setUserId(int userId) {
		this.userId = userId;
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



	public String getProfilePicURL() {
		return profilePicURL;
	}



	public void setProfilePicURL(String profilePicURL) {
		this.profilePicURL = profilePicURL;
	}



	public List<Post> getPosts() {
		return posts;
	}



	public void setPosts(List<Post> posts) {
		this.posts = posts;
	}



	@Override
	public String toString() {
		return "User [userId=" + userId + ", password=" + password + ", firstName="
				+ firstName + ", lastName=" + lastName + ", email=" + email 
				+ ", posts=" + "]";
	}

//	public String toStringPosts() {
//		return "User [userId=" + userId + ", password=" + password + ", firstName="
//				+ firstName + ", lastName=" + lastName + ", email=" + email;
//	}

//	public String displayPosts(List<Post> posts) {
//		StringBuilder out = new StringBuilder("");
//		for (Post p : posts) {
//			out.append(p.toStringUser());
//		}
//		return new String(out);
//	}

}
