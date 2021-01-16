import React, { useState, useEffect } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import './Navbar.css'
import SearchBar from '../SearchBar/SearchBar'
import TokenService from '../../services/token-service'
import { useHistory } from "react-router-dom";

const NavigationBar = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    let history = useHistory();


    //logout
    const logout = () => {
        TokenService.clearAuthToken();
        history.push('/');
        setLoggedIn(false);
    }

    useEffect(() => {
        //if user is logged in
        if (TokenService.hasAuthToken()) {
            setLoggedIn(true);
        }
    })


    if (loggedIn) {
        return (
            <section className="navbar=wrapper">
                <Navbar fixed="top" expand="lg" className="navbar">
                    <Navbar.Brand href="/user/home">Embers</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/user/home">Home</Nav.Link>
                            <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
                        </Nav>
                        <SearchBar />
                    </Navbar.Collapse>
                </Navbar>
            </section>
        )
    }

    //if user isn't logged in
    else {
        return (
            <section className="navbar=wrapper">
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
            </section>
        )
    }

}


export default NavigationBar;
