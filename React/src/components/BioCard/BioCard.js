import React from 'react';
import { Container, Row, Image, Col, } from 'react-bootstrap';
import Avatar from '../..//images/avatar.png';
import './BioCard.css';

const BioCard = (props) => {

    if (props.userData && props.userData.length) {
        const { firstName, lastName, picture } = props.userData[0];


        return (
            <Container className="bioCard">
                <Row>
                    <Col xs={3} md={4}>
                        <Image src={Avatar} thumbnail />
                    </Col>
                    <Col xs={10} md={6} className="bioDetails">
                        <h1>{firstName} {lastName}</h1>
                        <h3>@{firstName.toLowerCase()}{lastName.toLowerCase()}</h3>
                        <p>some cheesy Tagline</p>

                        <p>from Fire Island <span style={{ color: "red" }}>{props.userData.length - 1}</span> connections</p>
                    </Col>
                </Row>
            </Container>

        )
    } else {
        return <span>No Data</span>
    }


}

export default BioCard
