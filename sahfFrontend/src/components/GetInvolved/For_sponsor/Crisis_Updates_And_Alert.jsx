import React from 'react'
import './crisis-updates-alert.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
  


function Crisis_Updates_And_Alert() {
  return ( <>
 
   <div className='box1_crisis_updates'>
    <h1>Crisis Updates & Alert</h1>
     </div>
      
       
       <Card className="text-center card_body_crisis card border-0">
      <Card.Header className='card_header_crisis' style={{color :"#0056b3"}}>All is good for now.</Card.Header>
      <Card.Body>
        
        <Card.Text className='card_text_crisis border-0'>
          Please keep visiting Sahf's official social media accounts and website for latest information. 
        </Card.Text>
        <Card.Title className='card_below_crisis'>Thank you for having faith in <span style={{color:'red'}}>SAHF</span> .</Card.Title>
        <Row  >
          <Col className='card_btn_crisis'>  <Button variant="primary" className='card_btn' >Sponsor a Child</Button> </Col>
          <Col className='card_btn_crisis'>  <Button variant="primary"className='card_btn' >Sponsor a Child</Button> </Col>
        </Row>
        
        
      </Card.Body>
 
    </Card>
     

      </>
  )
}

export default Crisis_Updates_And_Alert;
