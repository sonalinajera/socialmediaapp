import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './ProfilePic.css'

const ProfilePic = ({ profilePic }) => {
    return (
        <section className="profile-pic-wrapper">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image className="profile-pic-img" src={profilePic} roundedCircle />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProfilePic
