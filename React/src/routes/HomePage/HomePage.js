import React from 'react'
import BioCard from '../../components/BioCard/BioCard'
import Post from '../../components/Post/Post'
import PostContents from '../../components/PostContents/PostContents'
import TokenService from '../../services/token-service'

const HomePage = () => {


  //if user is logged in
  if (TokenService.hasAuthToken()) {
    return (
      <div>
        <BioCard />
        <Post />
        <PostContents />
        <PostContents />

      </div>
    )
  }

  //if user isn't logged in, return nothing for now
  else {
    return (
      ''
    )
  }

}

export default HomePage
