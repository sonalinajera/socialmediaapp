import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'

const ProfilePic = () => {
    return (
        <section className="profile-pic-wrapper">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" roundedCircle />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProfilePic