import React from 'react';
import { Navbar, Container, Nav, Button, Row, Col } from 'react-bootstrap';

import logo from '/src/assets/img/logo.png';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container className="d-flex flex-row">
              < Navbar.Brand href="#home">
                <img width='200px' height='50px' src={logo} alt="logo"/>
              </Navbar.Brand>
              <div>
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Bio</Nav.Link>
                    <Nav.Link href="#pricing">Series</Nav.Link>
                  </Nav> 
              </div>
             
                  <Nav className=' align-items-center gap-5' >
                    <Col>
                    <Nav.Item>
                      <CartWidget/>
                    </Nav.Item>
                    </Col>
                    <Nav.Item>
                    <Button  variant="outline-info">Login</Button> 
                    </Nav.Item>
                </Nav>
             
                
          </Container>
      </Navbar>
    </>
  )
}

export default NavBar