import React, { useState, useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import SearchBar from '../SearchBar/SearchBar'
import TokenService from '../../services/token-service'
import { useHistory } from "react-router-dom";
import './Navbar.css'
import axios from 'axios'
const NavigationBar = (props) => {



    const [user, setUser] = useState({})


    let history = useHistory();


    //logout
    const logout = () => {
        TokenService.clearAuthToken();
        setUser({});
        props.setLoggedIn(false);
        axios.get('http://localhost:9001/SocialApp/logout').then((response) => {
            if (response) {

            }
        })
        history.push('/');
    }



    const populateUser = () => {
        if (TokenService.hasAuthToken()) {
            setUser(TokenService.getUser())
            props.setLoggedIn(true);
        }
    }

    useEffect(() => {
        //if user is logged in
        populateUser();
    }, [])


    if (props.loggedIn && user) {
        return (
            <section className="navbar-wrapper">
                <Navbar fixed="top" expand="lg" className="navbar">
                    <Navbar.Brand href="/user/home">Embers</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/user/home">Home</Nav.Link>
                            <Nav.Link href={"/user/profile/" + user.userId}>{user.firstName}</Nav.Link>
                            <Nav.Link href="/user/settings">Edit Profile</Nav.Link>
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
                <Navbar fixed="top" expand="lg" className="navbar">
                    <Navbar.Brand href="#home">Embers</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </section>
        )
    }
}

export default NavigationBar;
