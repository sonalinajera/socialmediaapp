package com.socialapp.dao;

import java.util.List;

import com.socialapp.model.User;

public interface UserDao {
	// CREATE
	public void insertUser(User user);

	// READ
	public List<User> selectAllUsers();

	public User selectUserById(int userId);

	public User selectUserByUsername(String username);

	public User selectUserByEmail(String email);

	// UPDATE
	public void updateUser(User user);

	// DELETE

}
