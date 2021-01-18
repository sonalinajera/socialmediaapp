import React from 'react';
import './Email.css'
import { Form, Button } from 'react-bootstrap'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import { DesktopWindowsTwoTone } from '@material-ui/icons';
//init("user_ehFDWoh9LFjdmwkg1ovQh");


function ResetPassword(props) {


    const sendMail = (ev) => {
        //keep the page from reloading after submission
        ev.preventDefault()
        const { userEmail } = ev.target
        console.log(userEmail.value)
        window.localStorage.setItem('email', userEmail.value);
        //  let userEmail = document.getElementById('to-email').value;

        window.Email.send({
            SecureToken: "6e849d89-435f-4ef6-8bd0-1f8385411022",
            To: userEmail.value,
            From: "made4development@gmail.com",
            Subject: "This is the subject",
            Body: "<html><h2>Hello,</h2><p>Click Here to <a href='http://localhost:3000/user/reset-password'>Reset Password </a></p></html>"
        }).then(
            message => alert(message)
        );
        userEmail.value = ''
    }
    return (
        <div className="reset-form-wrapper">
            <Form onSubmit={(ev) => sendMail(ev)} className="reset-form">
                <h3 className="reset-form-h3">Enter your email address</h3>
                <Form.Control name="userEmail" type="email" id="to-email" placeholder="Enter email" required />
                <br></br>
                <Button variant="primary" type="submit">Send</Button>
            </Form>
        </div>
    )
}

export default ResetPassword;