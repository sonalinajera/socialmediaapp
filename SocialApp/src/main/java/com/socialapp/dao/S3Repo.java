package com.socialapp.dao;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.InputStream;
import java.util.List;

import org.apache.commons.io.FileUtils;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.directconnect.model.CreateConnectionRequest;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
import com.amazonaws.services.s3.model.S3ObjectSummary;
import com.socialapp.constants.*;

public class S3Repo {

	public void getObj(AmazonS3 s3client, String objectName) {
		String bucketName = CommonS3Constants.BUCKET_NAME;

		try {
			S3Object s3object = s3client.getObject(bucketName, objectName);
			S3ObjectInputStream inputStream = s3object.getObjectContent();
			// Line below was originally used to download the file onto the computer.
			// FileUtils.copyInputStreamToFile(inputStream, new
			// File(CommonS3Constants.LOCAL_DOWNLOAD_PATH));

			System.out.println("file copied to destination.");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void createFolder(String folderName, AmazonS3 client) {
		// create meta-data for your folder and set content-length to 0
		String SUFFIX = CommonS3Constants.SUFFIX;
		String bucketName = CommonS3Constants.BUCKET_NAME;
		ObjectMetadata metadata = new ObjectMetadata();
		metadata.setContentLength(0);

		// create empty content+
		InputStream emptyContent = new ByteArrayInputStream(new byte[0]);

		// create a PutObjectRequest passing the folder name suffixed by /
		PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, folderName + SUFFIX, emptyContent,
				metadata);

		// send request to S3 to create folder
		client.putObject(putObjectRequest);
	}

	/**
	 * This method first deletes all the files in given folder and than the folder
	 * itself
	 */

	public void deleteFolder(String folderName, AmazonS3 client) {
		String bucketName = CommonS3Constants.BUCKET_NAME;
		List fileList = client.listObjects(bucketName, folderName).getObjectSummaries();
		for (Object object : fileList) {
			S3ObjectSummary file = (S3ObjectSummary) object;
			client.deleteObject(bucketName, file.getKey());
		}
		client.deleteObject(bucketName, folderName);
	}

	public AmazonS3 createClientConnectionRequest() {
		AWSCredentials credentials = new BasicAWSCredentials(CommonS3Constants.ACCESS_KEY_ID,
				CommonS3Constants.ACCESS_SEC_KEY);
		AmazonS3 s3client = AmazonS3ClientBuilder.standard()
				.withCredentials(new AWSStaticCredentialsProvider(credentials)).withRegion(Regions.US_EAST_2).build();
		return s3client;
	}

	public void createBucket(String bucketName, AmazonS3 s3client) {
		s3client.createBucket(bucketName);
	}
	
	public void uploadImage(String folderName, String fileName, AmazonS3 client, File image) {
		String bucketName = CommonS3Constants.BUCKET_NAME;
		String filePathName = folderName + CommonS3Constants.SUFFIX + fileName;
		client.putObject(
				new PutObjectRequest(bucketName, filePathName,image)
						.withCannedAcl(CannedAccessControlList.PublicRead));

	}
	
	public void deleteImage(String folderName, String fileName, AmazonS3 client) {
		String bucketName = CommonS3Constants.BUCKET_NAME;
		String filePathName = folderName + CommonS3Constants.SUFFIX + fileName;
		client.deleteObject(bucketName, filePathName);
	}
	
	
}
