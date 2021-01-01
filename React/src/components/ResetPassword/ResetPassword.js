import React from 'react';
import './ResetPassword.css'
import { Form, Button } from 'react-bootstrap'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_ehFDWoh9LFjdmwkg1ovQh");


function ResetPassword(props) {

    const serviceID = 'service_0nmad6w';
    const templateID = 'template_2bp3804';

    const sendMail = () => {
        let userEmail = document.getElementById('to-email').value;

        let templateParams = {
            to_email: userEmail,
            url: 'www.google.com'
        };

        emailjs.send(serviceID, templateID, templateParams)

            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            })
    };


    return (
        <div className="reset-form-wrapper">
            <Form className="reset-form">
                <Form.Control type="email" id="to-email" placeholder="Enter email" />
                <br></br>
                <Button onClick={sendMail} variant="primary" type="submit">
                    Send
                </Button>
            </Form >
        </div>


    )

}

export default ResetPassword;