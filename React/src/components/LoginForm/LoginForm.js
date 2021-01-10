import React from 'react';
import './LoginForm.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import config from '../../config';
import axios from 'axios';


const LoginForm = (props) => {

    let history = useHistory();
    console.log(history);

    const [email, setEmail] = useState({ value: '', touched: false })
    const [password, setPassword] = useState({ value: '', touched: false })

    const checkLogin = (userEmail, userPassword) => {
        axios.post('/login', {
            email: userEmail,
            password: userPassword
        })

        //Update the values of the state properties to trigger at the "onChange" attributes of the inputs.
        const updateEmail = (email) => {
            setEmail({ value: email, touched: true })
        }

        const updatePassword = (password) => {
            setPassword({ value: password, touched: true })
        }

    }

    return (

        <section className="login-form-wrapper">
            {/* <Form className="login-form" method="post" action="http://localhost:8080/SocialApp/resources/index.html">*/}
            <Form className="login-form" method="get" action="http://localhost:9001/SocialApp/api/getAllUsers">
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
