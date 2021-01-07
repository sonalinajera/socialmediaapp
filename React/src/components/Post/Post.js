import React, {useState} from 'react'
import { Container, Button, Form } from 'react-bootstrap';
import './Post.css'
import WritePost from '../../images/icons/writePost.png'

const Post = () => {
  const [shouldDisplayPostForm, displayPostForm] = useState(false);
  return (
    <Container className="newPostContainer">
      <Button variant="light" onClick={() => {displayPostForm(!shouldDisplayPostForm)}} className={shouldDisplayPostForm ? "hidden" : ""}><img src={WritePost}/> create a new post!</Button>
       <Form className={shouldDisplayPostForm ? "" : "hidden"}>
         <h2>Create new Post</h2>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Tell us about it Janet!</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="light">Post!</Button>
      </Form>
    </Container>
  )
}

export default Post
