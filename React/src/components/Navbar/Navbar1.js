import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import './Navbar.css'
import SearchBar from '../SearchBar/SearchBar'


const Navbar1 = () => {




    return (
        <Navbar expand="lg" className="navbar">
            <Navbar.Brand href="#home">Embers</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
                <SearchBar />
            </Navbar.Collapse>
        </Navbar>

    )
}


export default Navbar1;
