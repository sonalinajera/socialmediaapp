package com.socialapp.model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Arrays;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;

@Entity
@Table(name = "posts")
public class Post implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "post_id")
	private int postId;

	@Column(name = "post_date", nullable = false)
	private Timestamp postDate;

	@Column(name = "message", nullable = false)
	private String message;

	@Column(name = "picture", nullable = true)
	private byte[] picture;

	@Column(name = "likes")
	@ColumnDefault("0")
	private int likes;

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "FK_User_Id")
	private User user;

	public Post() {

	}
	
	public Post(Timestamp postDate, String message, byte[] picture, int likes, User user) {
		super();
		this.postDate = postDate;
		this.message = message;
		this.picture = picture;
		this.likes = likes;
		this.user = user;
	}

	public Post(int postId, Timestamp postDate, String message, byte[] picture, int likes, User user) {
		super();
		this.postId = postId;
		this.postDate = postDate;
		this.message = message;
		this.picture = picture;
		this.likes = likes;
		this.user = user;
	}

	public int getPostId() {
		return postId;
	}

	public void setPostId(int postId) {
		this.postId = postId;
	}

	public Timestamp getPostDate() {
		return postDate;
	}

	public void setPostDate(Timestamp postDate) {
		this.postDate = postDate;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public byte[] getPicture() {
		return picture;
	}

	public void setPicture(byte[] picture) {
		this.picture = picture;
	}

	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Post [postId=" + postId + ", postDate=" + postDate + ", message=" + message + ", picture="
				+ Arrays.toString(picture) + ", likes=" + likes + ", user=" + user.toStringPosts() + "]";
	}
	
	public String toStringUser() {
		return "Post [postId=" + postId + ", postDate=" + postDate + ", message=" + message + ", picture="
				+ Arrays.toString(picture) + ", likes=" + likes + "]";
	}

}
