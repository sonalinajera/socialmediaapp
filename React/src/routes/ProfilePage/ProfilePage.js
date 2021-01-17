import React from 'react';
import BioCard from '../../components/BioCard/BioCard';
import Post from '../../components/Post/Post';
import TokenService from '../../services/token-service';
import PostContents from '../../components/PostContents/PostContents';
import './ProfilePage.css';

const ProfilePage = (props) => {

  const user = TokenService.getUser();
  console.log(props.postData);
  // const user_posts = props.postData.filter(city => city.population > 3000000);

  return (
    <div className="profilepage">
      <BioCard />
      <Post />
      {props.postData.map((post, index) => {
        return (<PostContents key={index} pData={post} uData={props.userData} />)
      })}
    </div>
  )
}

export default ProfilePage;
