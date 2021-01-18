import React from 'react';
import BioCard from '../../components/BioCard/BioCard';
import Post from '../../components/Post/Post';
import TokenService from '../../services/token-service';
import PostContents from '../../components/PostContents/PostContents';
import './ProfilePage.css';

const ProfilePage = (props) => {

  function checkPost(post) {
    console.log("Checking post:", post);
    if (!post.user) {
      console.log("post has no user...");
      return true;
    }
    else {
      return post.userId === user.userId;
    }
  }
  const user = TokenService.getUser();
  const user_posts = props.postData.filter(checkPost);
  // console.log("user:", user);
  // console.log("before user_posts:", props.postData);
  // console.log("user_posts:", user_posts);

  // const user = TokenService.getUser()
  //   .then((user_response) => {
  //     const user_posts = props.postData.filter(checkPost);
  //     console.log("user_posts:", user_posts);
  //   });

  // console.log("props.postData:", props.postData);

  return (
    <div className="profilepage">
      <BioCard userId={props.userId} userData={props.userData}/>
      <Post />
      {user_posts.map((post, index) => {
        return (<PostContents key={index} pData={post} uData={props.userData} />)
      })}
    </div>
  )
}

export default ProfilePage;
