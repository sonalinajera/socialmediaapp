import React from 'react';
import BioCard from '../../components/BioCard/BioCard';
import Post from '../../components/Post/Post';
import PostContents from '../../components/PostContents/PostContents';
import './ProfilePage.css';

const ProfilePage = (props) => {
  function userCheck(user) {
    return user.userId.toString() === props.userId;
  }

  function dateCheck(date1, date2) {
    return date1 - date2;
  }
  
  return (
    <div className="profilepage">
      <BioCard userId={props.userId} userData={props.userData}/>
      <Post />
      {props.userData.filter(userCheck).map((user, index) => {
          return user.posts.sort(dateCheck).map((post, key) => {
            return (<PostContents key={key} pData={post} uData={user} numOfUsers={props.userData.length} />)
          })
        })}
    </div>
  )
}

export default ProfilePage;
