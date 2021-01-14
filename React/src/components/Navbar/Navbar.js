import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Navbar, Nav } from 'react-bootstrap'
import { Search } from '@material-ui/icons'

const NavigationBar = () => {

  //use localstorage to check if the user is logged in. then conditionally render.

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Social App</Navbar.Brand>
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

export default NavigationBar
