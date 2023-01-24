import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <>
        {['xl' ].map((expand) => (
          <Navbar key={expand}  expand={expand} className="mb-3 mt-3 container">
            <Container fluid>
              <Navbar.Brand href="#"> <span className='brand'>Amir </span> <span className='aca'>Academy </span> </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-center flex-grow-1 pe-3 items">
                    <NavLink to="about">About Us</NavLink>
                    <NavLink to="home">Course</NavLink>
                    <NavLink to="home">Resource</NavLink>
                    <NavLink to="home">Online Learning</NavLink>



                  </Nav>
                
                    <Button variant="outline button-nav">Log In</Button>
                 
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
};

export default Header;