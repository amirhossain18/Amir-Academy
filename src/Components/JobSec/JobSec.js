import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../HomeTop/HomeTop.css'
import { Button, Form } from 'react-bootstrap';
const JobSec = () => {
    return (
        <Container className='secend-sec'>
        <Row>


        <Col>
    <img className='img-fluid' src="https://assets.website-files.com/624fc1340c9d763a3cb1ead3/62877d601f23482651e98c9f_Student%2002-p-800.png" alt=""/>
    </Col>




    <Col className="">
    
   <h4 className="jobTitel"> Over 1M+ Students get’s job</h4>
   
   <p className='paragraph-normal'>Non-disclosure agreement seed round seed money accelerator influencer. Growth hacking return nondis sure agreement seed round seed .</p>
   <p className='paragraph-normal'>Non-disclosure agreement seed round seed money accelerator influencer. Growth hacking return nondis sure agreement seed round seed .</p>
   
  
            <Button className='search-button mt-3'>Explore Me</Button>
         
    </Col>

  </Row>
    </Container>
    );
};

export default JobSec;