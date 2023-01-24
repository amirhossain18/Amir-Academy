import React from 'react';
import './Work.css'
import { Button, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Work = () => {
    return (
        <div className='container'>
           <div className='text-center'>
           <h2 className='heading-2'>How it works</h2>
            <h3 className='word-d'> Non-disclosure agreement seed round seed <br/> money accelerator influencer.</h3>
          
          
          
            <Row>
    <Col className="intro">
    <div className='mt-3'>


    <div className='box'>
        <h4>Select a course</h4>
<h5>Non-disclosure agreement seed round seed money accelerator influencer.</h5>
      </div>
      <div className='box'>
        <h4>Fill it up & give payment</h4>
        <h5>Non-disclosure agreement seed round seed money accelerator influencer.</h5>

      </div>
      <div className='box'>
      <h4>Start build yourself</h4>
      <h5>Non-disclosure agreement seed round seed money accelerator influencer.</h5>
      </div>
    </div>
        
    </Col>
    <Col>
    <img className='img-fluid' src="https://assets.website-files.com/624fc1340c9d763a3cb1ead3/624ff628a862c051c49e3390_Image%20(27).png" alt=""/>
    </Col>
  </Row>
          
           </div>
        </div>
    );
};

export default Work;