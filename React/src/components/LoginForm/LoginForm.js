import React, { useState } from 'react';
import './LoginForm.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import config from '../../config';
import bcrypt from 'bcryptjs';
import TokenService from '../../services/token-service';

const LoginForm = (props) => {

    //router props history to change the URI.
    let history = useHistory();


    //state
    const [email, setEmail] = useState({ value: '', touched: false })
    const [password, setPassword] = useState({ value: '', touched: false })


    //post request for logging in. 
    const checkLogin = (ev) => {

        ev.preventDefault();
        axios.post(`${config.API_ENDPOINT}/login`, {
            email: email.value,
            password: password.value
        })
            .then((response) => {
                if (response) {

                    /*check user's password input against the password that comes from the server
                    if they are the same, then   TokenService.saveUser(response.data), if wrong, display an error message  */
                    /* in the home page and navbar, call TokenService.hasAuthToken to make sure user had authorization. */

                    if (bcrypt.compareSync(password.value, response.data.password) === true) {
                        console.log(response.data)
                        //set the user object to the localStorage for persistence as "user".
                        TokenService.saveUser(response.data);
                        props.setLoggedIn(true);
                        //route to the user home if credentials are correct
                        history.push('/user/home');
                    } else {
                        console.log("password is wrong");
                    }

                } else {
                    console.log("no response");
                }

            }, (error) => {
                console.log(error);
            })
    }

    //Update the values of the state properties to trigger at the "onChange" attributes of the inputs.
    const updateEmail = (email) => {
        setEmail({ value: email, touched: true })
    }

    const updatePassword = (password) => {
        setPassword({ value: password, touched: true })
    }


    return (

        <section className="login-form-wrapper">
            <Form className="login-form" method="get" onSubmit={(ev) => checkLogin(ev)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email"
                        placeholder="Enter email" onChange={e => updateEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password"
                        placeholder="Password" onChange={e => updatePassword(e.target.value)} />
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
