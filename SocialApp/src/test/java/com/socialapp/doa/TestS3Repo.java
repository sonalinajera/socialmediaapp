package com.socialapp.doa;

import static org.junit.Assert.*;

import java.io.File;

import org.apache.spark.sql.catalyst.expressions.objects.AssertNotNull;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import com.amazonaws.services.s3.AmazonS3;
import com.socialapp.dao.S3Repo;

public class TestS3Repo {
	S3Repo repo;

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
		repo = new S3Repo();
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testMakeConnection() {
		AmazonS3 s3client = repo.createClientConnectionRequest();
		assertNotNull(s3client);
	}
	
	@Test
	public void testUploadProfilePic() {
		AmazonS3 s3client = repo.createClientConnectionRequest();
		String folderName = "johndoe@fakeemail.com/profilepic";
		String fileName = "profilepicture";
		File image = new File("C:\\Users\\corbi\\Documents\\my_git_repos\\project2\\social-media-site\\SocialApp\\src\\test\\resources\\df45ca913aa6f46e3ee75eb6a2872464.jpg");
		repo.createFolder(folderName, s3client);
		repo.uploadImage(folderName, fileName, s3client, image);
	}

}
