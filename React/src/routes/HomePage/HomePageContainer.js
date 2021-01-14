
import axios from "axios";
import React, { useEffect, useState } from "react";
import HomePage from '../../routes/HomePage/HomePage'



const HomePageContainer = () => {

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    /* Retrieving post data */
    useEffect(() => {
        axios
            .get('http://localhost:9001/SocialApp/api/getAllPosts')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((err) => {

            })
    }, []);

    /* Retrieving user data */
    useEffect(() => {
        axios
            .get('http://localhost:9001/SocialApp/api/getAllUsers')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((err) => {

            })
    }, []);



    return <HomePage postData={posts} userData={users}></HomePage>



}


export default HomePageContainer;