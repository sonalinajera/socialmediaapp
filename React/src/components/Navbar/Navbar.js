import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Navbar } from 'react-bootstrap'

const Nav = () => {

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <SearchBar />
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Nav
