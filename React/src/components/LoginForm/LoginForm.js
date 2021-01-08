import React from 'react'
import './LoginForm.css'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const LoginForm = (props) => {

    let history = useHistory();
    console.log(history)

    return (

        <section className="login-form-wrapper">
            <Form className="login-form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Link to="/user/registration">Don't have an account?</Link><br /> <br />
                <Link to="/user/email-reset-password">Reset password</Link><br /> <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </section>
    )
}

export default LoginForm
