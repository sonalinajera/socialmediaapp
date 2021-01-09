import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import './RegistrationForm.css'
import ValidationError from './ValidationError/ValidationError'


const RegistrationForm = () => {

    //Store the form fields in state to achieve a "controlled form", which enhances users' interactivity with forms
    const [email, setEmail] = useState({ value: '', touched: false })
    const [firstName, setFirstName] = useState({ value: '', touched: false })
    const [lastName, setLastName] = useState({ value: '', touched: false })
    const [password, setPassword] = useState({ value: '', touched: false })
    const [repeatPassword, setRepeatPassword] = useState({ value: '', touched: false })


    //Update the values of the state properties to trigger at the "onChange" attributes of the inputs.

    const updateEmail = (email) => {
        setEmail({ value: email, touched: true })
    }

    const updateFirstName = (firstName) => {
        setFirstName({ value: firstName, touched: true })
    }

    const updateLastName = (lastName) => {
        setLastName({ value: lastName, touched: true })
    }

    const updatePassword = (password) => {
        setPassword({ value: password, touched: true })
    }

    const updateRepeatPassword = (repeatPassword) => {
        setRepeatPassword({ value: repeatPassword, touched: true })
    }



    //this is the api call function
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(email.value, firstName.value, lastName.value, password.value)

        const registrationJSON = {
            email: email.value,
            firstName: firstName.value,
            lastName: lastName.value,
            password: password.value
        }

        fetch('http://localhost:9001/SocialApp/api/createUser',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(registrationJSON)
            }
        ).then(response => response.text()

        ).then(data => {
            console.log(data)
        });

        //in the POST request's body, send the JSON.stringify(registrationJSON)
    }


    //Basic form validations

    const validateEmail = () => {
        //Check the emails in the DB to ensure emails' uniqueness. 
    }

    const validateFirstName = () => {
        const firstNameValue = firstName.value.trim()

        if (!firstNameValue.length) {
            return "First name is required";
        } else if (firstNameValue.length < 3) {
            return `First name must be at least 3 characters long`
        }
    }

    const validateLastName = () => {
        const lastNameValue = lastName.value.trim()
        if (!lastNameValue.length) {
            return "Last name is required";
        } else if (lastNameValue.length < 3) {
            return 'Last name  must be at least 3 characters long'
        }
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
        <section className="registration-wrapper">
            <Form className="registration-form" onSubmit={e => handleSubmit(e)}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            className="registration-control" type="email"
                            placeholder="Enter email" onChange={e => updateEmail(e.target.value)} />
                        {email.touched && <ValidationError message={validateEmail()} />}
                    </Form.Group>

                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        className="registration-control" type="text"
                        placeholder="First Name" onChange={e => updateFirstName(e.target.value)} />
                    {firstName.touched && <ValidationError message={validateFirstName()} />}
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        className="registration-control" type="text"
                        placeholder="Last Name" onChange={e => updateLastName(e.target.value)} />
                    {lastName.touched && <ValidationError message={validateLastName()} />}
                </Form.Group>

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

                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Upload a profile picture" />
                </Form.Group>


                <Button className="registration-btn" variant="primary" type="reset">
                    Cancel
                </Button>
                <Button className="registration-btn"
                    variant="primary" type="submit"
                    disabled={
                    /* validateEmail() || */ validateFirstName() || validateLastName() || validatePassword() || validateRepeatPassword()
                    }
                >
                    Save
                </Button>
            </Form>
        </section>
    )
}

export default RegistrationForm
