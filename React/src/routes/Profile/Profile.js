import React from 'react'
import BioCard from '../../components/BioCard/BioCard'
import Post from '../../components/Post/Post'
import PostContents from '../../components/PostContents/PostContents'

const Profile = () => {
  return (
    <div>
      <BioCard/>
      <Post/>
      <PostContents/>
      <PostContents/>

    </div>
  )
}

export default Profile
