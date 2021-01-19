import React from 'react'
import BioCard from '../../components/BioCard/BioCard'
import Post from '../../components/Post/Post'
import PostContents from '../../components/PostContents/PostContents'
import TokenService from '../../services/token-service'
import './HomePage.css'
import { useHistory } from "react-router-dom";

const HomePage = (props) => {

    //router props history to change the URI.
    let history = useHistory();
    console.log("users:" + props.userData.length);
    if (TokenService.hasAuthToken()) {
        return (
            <div className="homepage">
                <BioCard uData={props.userData} />
                <Post />
                {props.userData.map((user, index) => {
                    return user.posts.map((post, key) => {
                        return (<PostContents key={key} pData={post} uData={user} numOfUsers={props.userData.length} />)
                    })
                })}
            </div>
        )
    } else {
        history.push('/');
    }
}

export default HomePage;
