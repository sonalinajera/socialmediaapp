import React, { useState, useEffect } from 'react'
import { Container, Button, Form } from 'react-bootstrap';
import './Post.css'
import WritePost from '../../images/icons/writePost.png'
import axios from 'axios';
import TokenService from '../../services/token-service';
import config from '../../config';
import S3 from 'react-aws-s3'

const Post = () => {
    const [shouldDisplayPostForm, displayPostForm] = useState(false);
    const [shouldDisplayPostButton, displayPostButton] = useState(true);
    const [user, setUser] = useState({});

    let postImage = document.getElementById("file1");
    const postBod = document.getElementById("post-body");
    let file = null;

    //get the user when this component mounts
    useEffect(() => {
        setUser(TokenService.getUser());
    }, [])


    const imageHandler = () => {
        console.log(postImage)
        if (postImage != null) {
            postImage.click();


            postImage.onchange = () => {
                file = postImage.files[0];
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
    const postHandler = (ev) => {
        ev.preventDefault()
        console.log(file)

        const config = {
            bucketName: 'socialmediasite',
            dirName: `${user.email}/posts`, /* optional */
            region: 'us-east-2',
            accessKeyId: 'AKIA2OUFO3GG2HD3J75T',
            secretAccessKey: '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',
        }



        const ReactS3Client = new S3(config);
        const message = postBod.innerText;

        if (!file) {
            fetch('http://localhost:9001/SocialApp/api/createPost',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'

                    },
                    body: JSON.stringify({
                        message: message,
                        postPicURL: null,
                        user: user
                    })
                }
            ).then(response => response.text()

            ).then(data => {
                console.log(data)
            });
        }


        else {
            ReactS3Client
                .uploadFile(file)
                .then(data =>
                    fetch('http://localhost:9001/SocialApp/api/createPost',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*'

                            },
                            body: JSON.stringify({
                                message: message,
                                postPicURL: data.location,
                                user: user
                            })
                        }
                    ).then(response => response.text()

                    ).then(data => {
                        console.log(data)

                    }
                    )
                        .catch(err => console.error(err))
                );
        }
        alert('Post has been created');
        postBod.innerHTML = "";
        window.location.reload();
    }

    return (
        <Container className="newPostContainer">
            <Button variant="light" onClick={() => { displayPostForm(!shouldDisplayPostForm) }} className={shouldDisplayPostButton ? "hidden" : ""}><img src={WritePost} /> create a new post!</Button>
            <Form onSubmit={(ev) => postHandler(ev)} className={shouldDisplayPostForm ? "" : "hidden"} >
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
                <Button variant="light" type="submit">Post!</Button>
                <input type="file" id="file1" style={{ display: "none" }} />
            </Form>
        </Container>
    )
}

export default Post
