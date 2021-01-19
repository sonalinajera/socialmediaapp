import React, { useState, useEffect } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import ValidationError from '../../RegistrationForm/ValidationError/ValidationError'
import bcrypt from 'bcryptjs'
import './ResetPassword.css'




//Create the updatePassword function here


const ResetPassword = (props) => {

    const [password, setPassword] = useState({ value: '', touched: false })
    const [repeatPassword, setRepeatPassword] = useState({ value: '', touched: false })

    let history = useHistory();

    const updatePassword = (password) => {
        setPassword({ value: password, touched: true })
    }

    const updateRepeatPassword = (repeatPassword) => {
        setRepeatPassword({ value: repeatPassword, touched: true })
    }



    const handleSubmit = (event) => {
        //console.log(password.value)
        // console.log(repeatPassword.value)
        event.preventDefault()

        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password.value, salt);

        fetch('http://localhost:9001/SocialApp/api/updateUser',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'

                },
                body: JSON.stringify({
                    password: hash,
                    email: window.localStorage.getItem('email')
                })
            }
        ).then(response => response.text()

        ).then(data => {
            console.log(data)
        });
    }

    const validatePassword = () => {
        const userPassword = password.value.trim()
        if (!userPassword.length) {
            return "Password is required"
        } else if (userPassword.length < 6 || userPassword.length > 72) {
            return "Password must be between 6 and 72 characters long"
        } else if (!userPassword.match(/[0-9]/)) {
            return "Password must contain at least one number"
        }
    }


    const validateRepeatPassword = () => {
        const userRepeatPassword = repeatPassword.value.trim()
        const userPassword = password.value.trim()

        if (userRepeatPassword !== userPassword) {
            return 'Passwords do not match'
        }
    }

    return (
        <section className="reset-password-wrapper">
            <Form onSubmit={e => handleSubmit(e)} className="reset-password-form">
                <h4 className="resetPass-header">Reset Password</h4>
                <Form.Group controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        className="registration-control" type="password"
                        placeholder="Password" onChange={e => updatePassword(e.target.value)} />
                    {password.touched && <ValidationError message={validatePassword()} />}
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                    <Form.Label>Validate Password</Form.Label>
                    <Form.Control
                        className="registration-control" type="password"
                        placeholder="Password" onChange={e => updateRepeatPassword(e.target.value)} />
                    {repeatPassword.touched && <ValidationError message={validateRepeatPassword()} />}
                </Form.Group>
                <Button className="registration-btn"
                    variant="primary" type="submit"
                    disabled={
                        validatePassword() || validateRepeatPassword()
                    }
                >
                    Save
                </Button>
            </Form>
        </section>
    )
}

export default ResetPassword