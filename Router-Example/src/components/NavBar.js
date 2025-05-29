import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    const textColor = 'text-white'
  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'} className={textColor}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/about'} className={textColor}>About</Nav.Link>
            <Nav.Link as={Link} to={'/contact'} className={textColor}>Contact</Nav.Link>
            <Nav.Link as={Link} to={'/info'} className={textColor}>Info</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar