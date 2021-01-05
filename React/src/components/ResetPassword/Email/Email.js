import React from 'react';
import './Email.css'
import { Form, Button } from 'react-bootstrap'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_ehFDWoh9LFjdmwkg1ovQh");


function Email(props) {

    const serviceID = 'service_0nmad6w';
    const templateID = 'template_2bp3804';


    //Before sending an email to the user, we need to look through the emails in our db and ensure that this user exists
    const sendMail = (ev) => {
        //ev.preventDefault() prevents the browser from reloading the page. This is only necessary for forms.
        ev.preventDefault()
        //Utilize object destructuring to get the input from the form where this function will be invoked. 
        const { userEmail } = ev.target;
        //.value is the actual user's input as a string.
        console.log(userEmail.value)
        let templateParams = {
            to_email: userEmail.value,
            url: 'http://localhost:3000/user/reset-password'
        };

        emailjs.send(serviceID, templateID, templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                //reset the input box
                userEmail.value = ''
            }, function (error) {
                console.log('FAILED...', error);
            })

    };


    return (
        <div className="reset-form-wrapper">
            <Form onSubmit={(ev) => sendMail(ev)} className="reset-form">
                <Form.Control name="userEmail" type="email" id="to-email" placeholder="Enter email" />
                <br></br>
                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form >
        </div>


    )

}

export default Email;