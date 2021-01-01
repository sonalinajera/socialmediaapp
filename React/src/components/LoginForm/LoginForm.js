import React from 'react'
import './LoginForm.css'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    return (
        <div className="login-form-wrapper">
            <Form className="login-form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Link to="/user/registration">Don't have an account?</Link><br /> <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default LoginForm
