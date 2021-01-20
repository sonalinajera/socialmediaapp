import React, { useState, useEffect } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import './BioCard.css';
import TokenService from '../../services/token-service';
import ProfilePic from '../ProfilePic/ProfilePic';

const BioCard = (props) => {

    const [user, setUser] = useState([]);


    useEffect(() => {
        //get the user from the localStorage
        setUser(TokenService.getUser());
    }, [])



    if (user && props.userData) {
        const user_match = props.userData.filter(function (u) {
            return u.userId.toString() === props.userId;
        });
        const user_to_view = user_match[0];
        if (!user_to_view) {
            return (<></>);
        } else {
            return (
                <Container className="bioCard">
                    <Row>
                        <Col xs={3} md={4}>
                            <ProfilePic profilePic={user_to_view.profilePicURL} />
                        </Col>
                        <Col xs={10} md={6} className="bioDetails">
                            <h1>{user_to_view.firstName} {user_to_view.lastName}</h1>
                            {/* <h1>{user.firstName} {user.lastName}</h1> */}

                            {/* <h3>@{user.firstName.toLowerCase()}{user.lastName.toLowerCase()}</h3> */}
                            <p>some cheesy Tagline</p>

                            {/* <p>from Fire Island <span style={{ color: "red" }}>31</span> connections</p> */}
                        </Col>
                    </Row>
                </Container>
            )
        }
    } else if (user) {
        return (
            <Container className="bioCard">
                <Row>
                    <Col xs={3} md={4}>
                        <ProfilePic profilePic={user.profilePicURL} />
                    </Col>
                    <Col xs={10} md={6} className="bioDetails">
                        <h1>{user.firstName} {user.lastName}</h1>
                        {/* <h3>@{user.firstName.toLowerCase()}{user.lastName.toLowerCase()}</h3> */}
                        <p>some cheesy Tagline</p>


                        {/* <p>from Fire Island <span style={{ color: "red" }}>31</span> connections</p> */}

                    </Col>
                </Row>
            </Container >
        )
    } else {
    return <span>No Data</span>
}

}

export default BioCard
