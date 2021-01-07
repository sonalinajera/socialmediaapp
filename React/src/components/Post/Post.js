import React from 'react'
import { Container, Button, Form } from 'react-bootstrap';
import './Post.css'

const Post = () => {
  return (
    <Container className="newPostContainer">
      <Button variant="light">Create a new post!</Button>
      <Form>
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
