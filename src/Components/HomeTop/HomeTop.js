import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HomeTop.css'
import { Button, Form } from 'react-bootstrap';
const HomeTop = () => {
    return (
        <Container>
        <Row>
    <Col className="intro">
    
   <h4 className="Mcolor"> Grow yourself with us</h4>
   
   <h2 className='heading-1'>Grow your skill & get world class job’s</h2>
   <p className='paragraph-normal'>Non-disclosure agreement seed round seed money accelerator influencer. Growth hacking return nondis sure agreement seed round seed .</p>
   <Form className="d-flex mt-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='search-button'>Search</Button>
          </Form>
    </Col>
    <Col>
    <img className='img-fluid' src="https://assets.website-files.com/624fc1340c9d763a3cb1ead3/62877cc47182737223f8cab6_Student%2001-p-800.png" alt=""/>
    </Col>
  </Row>
    </Container>
    );
};

export default HomeTop;