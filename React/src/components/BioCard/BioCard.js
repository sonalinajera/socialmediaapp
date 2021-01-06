import React from 'react';
import { Container, Row, Image, Col, } from 'react-bootstrap';
import Avatar from '../..//images/avatar.png';
import './BioCard.css';

const BioCard = () => {
  return (
    <Container className="bioCard">
      <Row>
        <Col xs={3} md={4}>
          <Image src={Avatar} thumbnail />
        </Col>
        <Col xs={10} md={6} className="bioDetails">
          <h1>Not Aang</h1>
          <h3>@username</h3>
          <p>some cheesy Tagline</p>

          <p>from Fire Island <span style={{ color: "red" }}>345</span> connections</p>
        </Col>
      </Row>
    </Container>

  )
}

export default BioCard
