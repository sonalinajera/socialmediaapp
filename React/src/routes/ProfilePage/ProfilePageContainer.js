import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfilePage from '../ProfilePage/ProfilePage';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';
import config from '../../config';

const ProfilePageContainer = (props) => {

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    /* Retrieving post data */
    useEffect(() => {
        axios
            .get(`${config.API_ENDPOINT}/api/getAllPosts`)
            .then((response) => {
                setPosts(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [posts]);

    /* Retrieving user data */
    useEffect(() => {
        axios
            .get(`${config.API_ENDPOINT}/api/getAllUsers`)
            .then((response) => {
                setUsers(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    //Dont display the home page if the user is not logged in.
    if (TokenService.hasAuthToken()) {
        return <ProfilePage postData={posts} userData={users} />
    } else {
        <Link to='/'>Login Page</Link>
    }
}

export default ProfilePageContainer;