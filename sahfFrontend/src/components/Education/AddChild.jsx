import React from 'react'
import Button from 'react-bootstrap/Button';
import myimg from '../../assets/Education/addchild.jpg';

import './Addchild.css';
import Card from 'react-bootstrap/Card';




function AddChild() {
  return (
    <>


      <div className="box1_addChild">
        <img src={myimg} alt="" />
        <h1>Add Child</h1>
      </div>



      <div>
        <Card>
          <Card.Header className='header-1 border-0'>Add Such Children Who need  us  the most</Card.Header>
          <Card.Body className='header-body'>
            <div className='google-form-box'>
              <Card.Title className='header-title'>Add Child</Card.Title>
              <Card.Text className='header-text'>
                We are dedicated to giving orphaned and underprivileged children a brighter future. <br />Join us in supporting their education, care, and well-being through our NGO initiatives.
              </Card.Text>
              <button className="bg-primary text-white form_button">Fill Out Form</button>
            </div>
          </Card.Body>
        </Card>
      </div>

    </>
  )
}

export default AddChild
