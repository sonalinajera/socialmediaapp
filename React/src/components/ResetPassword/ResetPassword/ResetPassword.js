import React from 'react'
import './ResetPassword.css'
import { Form, Button } from 'react-bootstrap'



//Create the updatePassword function here


const ResetPassword = (props) => {
    return (
        <div className="reset-password-wrapper">
            <Form onSubmit={() => console.log(props.history)} className="reset-password-form">
                <Form.Group controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formGridPassword">
                    <Form.Label>Retype Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default ResetPassword