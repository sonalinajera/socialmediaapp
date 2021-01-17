import React, { useState, useEffect } from 'react';
import './UserSettings.css';
import TokenService from '../../services/token-service';
import { Form, Col, Button, Label } from 'react-bootstrap';
import ProfilePic from '../../components/ProfilePic/ProfilePic';

const UserSettings = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(TokenService.getUser());
    }, [])


    console.log(user);

    if (user) {
        return (
            <section className="user-settings">
                <h2>Edit Profile</h2>
                <div className="profile-picture-wrapper">
                    <Form className="profle-picture-form">
                        <h4>Profile Picture</h4>
                        <ProfilePic profilePic={user.profilePicURL} />
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Change your profile picture" />
                        </Form.Group>
                    </Form>
                </div>
                <div className="bio-wrapper">
                    <Form className="bio-form">

                    </Form>
                </div>
                <div className="">
                    <Form className="bio-form">

                    </Form>
                </div>
            </section>
        )
    } else {
        return ''
    }

}

export default UserSettings
