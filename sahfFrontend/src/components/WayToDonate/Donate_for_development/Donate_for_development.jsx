import React from 'react'
import './donate_for_child.css'
import photo from '../../../assets/Way to donate/donate-for-development.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Donate_for_development = () => {

  useGSAP(() => {
    gsap.from(".box1 img,h1 ,.box2 .card_body_donate", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out"
    });

  });




  return (
    <>
      <div className="box1">
        <img src={photo} alt="" />
        <h1>Donate For Development</h1>
      </div>
      <div className="box2">

        <Card className='card_body_donate'>
          <Card.Body>
            <Card.Title className=' card_title_donate'>IMPROVE LEARNING CENTRES (CHILD-FRIENDLY)</Card.Title>
            <Card.Text className='card_text_donate'>
              Your generous support will help us transform this learning center into a vibrant and nurturing space where children can thrive. We will create a stimulating environment with engaging activities, ensuring every child has the opportunity to learn, grow, and reach their full potential. By investing in these children, we are investing in a brighter future for our community.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='card_body_donate'>
          <Card.Body>
            <Card.Title className='card_title_donate'>IMPROVE SCHOOL INFRASTRUCTURE</Card.Title>
            <Card.Text className='card_text_donate'>
              Your generous support will help us create a vibrant and nurturing learning environment for our children. We plan to invest in (Specific improvements, e.g., renovating classrooms, building a library, upgrading technology, creating a safe outdoor play area). These improvements will not only enhance the physical space but also provide a more conducive environment for learning and growth, ensuring our children have the best possible opportunities to succeed.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='card_body_donate'>

          <Card.Body>
            <Card.Title className=' card_title_donate'>BUILDING SMART LEARNING CENTRES</Card.Title>
            <Card.Text className='card_text_donate'>
              Your generous support will help us transform this learning center into a vibrant hub of innovation. We plan to equip it with cutting-edge technology, including interactive whiteboards, high-speed internet, and access to educational software. This will provide our students with engaging learning experiences, foster critical thinking skills, and prepare them for success in the digital age.
            </Card.Text>
            <Button variant="primary" style={{
              paddingLeft: '5vw',
              paddingRight: '5vw',
              paddingTop: '1.5vh',
              paddingBottom: '1.5vh',
              fontSize: '2.5vh',
              fontWeight: '600'
            }}
              className='btn_donate'>Donate Now</Button>
          </Card.Body>
        </Card>


      </div>

    </>
  )
}

export default Donate_for_development
