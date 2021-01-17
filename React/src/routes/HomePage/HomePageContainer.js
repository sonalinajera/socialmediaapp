
import axios from "axios";
import React, { useEffect, useState } from "react";
import HomePage from '../../routes/HomePage/HomePage';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';
import config from '../../config';



const HomePageContainer = () => {

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
    }, []);

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
        return <HomePage postData={posts} userData={users}></HomePage>
    } else {
        <Link to='/'>Login Page</Link>
    }

}


export default HomePageContainer;