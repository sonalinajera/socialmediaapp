import React from 'react';
import { Container, Row, Image, Col, } from 'react-bootstrap';
import Avatar from '../../images/katara.jpeg';
import './BioMini.css'

const BioMini = () => {
  return (
    <Container>
      <Row className="miniBio-container">
        <Col xs={3} md={2}>
          <Image src={Avatar} rounded className="bioMiniThumbnail"/>
        </Col>
        <Col xs={10} md={6} className="miniBioDetails">
          <p>@username</p>
          <p> <span style={{ color: "red" }}>345</span> connections</p>
        </Col>
      </Row>
    </Container>

  )
}

export default BioMini
