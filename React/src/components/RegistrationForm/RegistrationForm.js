import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import './RegistrationForm.css'


const RegistrationForm = () => {
    return (
        <div className="registration-wrapper">

            <Form className="registration-form">
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="First Name" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Last Name" />
                </Form.Group>


                <Form.Group controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formGridPassword">
                    <Form.Label>Validate Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Upload a profile picture" />
                </Form.Group>



                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default RegistrationForm
