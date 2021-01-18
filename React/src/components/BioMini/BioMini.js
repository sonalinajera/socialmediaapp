import React from 'react';
import { Container, Row, Image, Col, } from 'react-bootstrap';
import './BioMini.css'

const BioMini = (props) => {

    //If user exists
    if (props.userData) {
        const { firstName, lastName, profilePicURL } = props.userData;

        let user = props.userData;
        let post = props.postData;
        console.log('user from biomini: ', user);
        console.log('post from biomini: ', post);


        return (
            <Container>
                <Row className="miniBio-container">
                    <Col xs={3} md={2}>
                        <Image src={profilePicURL} rounded className="bioMiniThumbnail" alt="user-profile-pic" />
                    </Col>
                    <Col xs={6} md={6} className="miniBioDetails">
                        <p>@{firstName.toLowerCase()}{lastName.toLowerCase()}</p>
                        <p> <span style={{ color: "red" }}></span>{props.numOfUsers - 1} connections</p>
                    </Col>
                </Row>
            </Container>

        )
    } else {
        return <span>No Data</span>
    }

}

export default BioMini
