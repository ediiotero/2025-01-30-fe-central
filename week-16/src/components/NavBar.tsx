import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar: React.FC = () => {
  return (
    <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand className='text-white'>React Week 16</Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default NavBar