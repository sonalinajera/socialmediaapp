import React from 'react';
import './ResetPassword.css'
import { Form, Button } from 'react-bootstrap'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import { DesktopWindowsTwoTone } from '@material-ui/icons';
//init("user_ehFDWoh9LFjdmwkg1ovQh");


function ResetPassword(props) {


    const sendMail = () => {
        let userEmail = document.getElementById('to-email').value;

        window.Email.send({
            SecureToken: "6e849d89-435f-4ef6-8bd0-1f8385411022",
            To: userEmail,
            From: "made4development@gmail.com",
            Subject: "This is the subject",
            Body: "<html><h2>Hello,</h2><p>Click Here to <a href=\"https://www.google.com\">Reset Password </a></p></html>"
        }).then(
            message => alert(message)
        );
    }
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