import React, { useState, useEffect } from 'react'
import { Container, Button, Form } from 'react-bootstrap';
import './Post.css'
import WritePost from '../../images/icons/writePost.png'
import axios from 'axios';
import TokenService from '../../services/token-service';

const Post = () => {
    const [shouldDisplayPostForm, displayPostForm] = useState(false);
    const [shouldDisplayPostButton, displayPostButton] = useState(true);
    const [user, setUser] = useState({});

    let postImage = document.getElementById("file1");
    const postBod = document.getElementById("post-body");

    useEffect(() => {
        setUser(TokenService.getUser());
    }, [])


    const imageHandler = () => {
        console.log(postImage)
        if (postImage != null) {
            postImage.click();


            postImage.onchange = () => {
                const file = postImage.files[0];
                console.log(file.name);


                let reader = new FileReader();
                reader.onload = (e) => {
                    let pic = document.createElement('img');
                    pic.src = reader.result;
                    pic.className = 'img-thumbnail';
                    pic.width = '300'



                    postBod.appendChild(pic);
                }

                reader.readAsDataURL(file);
            }
        }
    }


    //all we need is the url to the image and the message body sent together at once in this function
    const postHandler = () => {
        const jsonToSend = {
            
        }

        const message = postBod.innerText;

        axios.post('http://localhost:9001/SocialApp/api/createPost', {
            message: message
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        postBod.innerHTML = "";
    }

    return (
        <Container className="newPostContainer">
            <Button variant="light" onClick={() => { displayPostForm(!shouldDisplayPostForm) }} className={shouldDisplayPostButton ? "hidden" : ""}><img src={WritePost} /> create a new post!</Button>
            <Form className={shouldDisplayPostForm ? "" : "hidden"} method="POST">
                <h2>Create new Post <Button variant="light">X</Button></h2>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Tell us about it Janet!</Form.Label>
                    <Form.Group  >
                        <div contentEditable="true" id="post-body"></div>
                    </Form.Group>
                    {/* <Form.Control as="textarea" rows={3} /> */}
                </Form.Group>
                <Button id="image-btn" variant="light" onClick={imageHandler}>
                    Add Image
                </Button>
                <Button variant="light" onClick={postHandler}>Post!</Button>
                <input type="file" id="file1" style={{ display: "none" }} />
            </Form>
        </Container>
    )
}

export default Post
