import React from 'react'
import BioCard from '../../components/BioCard/BioCard'
import Post from '../../components/Post/Post'
import PostContents from '../../components/PostContents/PostContents'
import TokenService from '../../services/token-service'
import './HomePage.css'
import { useHistory } from "react-router-dom";

/* {props.userData.map((user, index) => {
          return user.posts.map((post, key) => {
            return (<PostContents key={key} pData={post} uData={user} numOfUsers={props.userData.length} />)
          })
        })} */

// return (<PostContents key={key} pData={post[0]} uData={post[1]} numOfUsers={props.userData.length} />)})}

const HomePage = (props) => {

  //router props history to change the URI.
  let history = useHistory();

  let posts = [];

  let postsArray = props.userData.map((user) => {
    return user.posts.map((post) => {
      return [post, user];
    })
  })


  var i;
  for (i in postsArray) {
    posts = posts.concat(postsArray[i]);
  }


  function dateCheck(postUser1, postUser2) {
    return postUser2[0].postDate - postUser1[0].postDate;
  }

  if (TokenService.hasAuthToken()) {
    return (
      <div className="homepage">
        <BioCard userData={props.userData} />
        <Post />
        {/* Each postUser has the post in postUser[0], and the user in postUser[1] */}
        {posts.sort(dateCheck).map((postUser, key) => {
          return (<PostContents key={key} pData={postUser[0]} uData={postUser[1]} numOfUsers={props.userData.length} />)
        })
        }
      </div>
    )
  } else {
    history.push('/');
  }
}

export default HomePage;
