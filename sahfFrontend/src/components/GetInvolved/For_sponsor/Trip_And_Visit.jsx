import React from 'react'
import './Trip_and_Visit.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Trip_And_Visit() {
  return (
    <>
      <div className='box1_trip_and_vist'>
        <h1>Trip & Visit</h1>
      </div>

      <Card className='first_card_trip   card border-0'>

        <Card.Body>
          <Card.Title className='card_header_trip'>Meeting your sponsored child at SAHF education centre</Card.Title>
          <Card.Text className='card_text_trip'>
            It transforms the relationship from abstract to personal, fostering a stronger emotional bond and a greater sense of purpose in the sponsorship. Seeing firsthand the positive changes your support has made in the child's life can be incredibly motivating and reaffirming. It offers a unique opportunity to learn about the child's culture, community, and daily life, broadening your own perspective.
            <br />
            <br />

            Meeting the child can serve as a powerful reminder of the importance of your ongoing support and inspire you to continue making a difference. Knowing they are valued and cared for by someone far away can boost their self-esteem and sense of worth.
            <br /><br />

            Meeting their sponsor can provide hope for the future and inspire them to reach their full potential. It can foster a unique cross-cultural friendship, offering the child a new perspective and expanding their horizons.
            <br /><br />
            <span><b>The child's safety and well-being should always be the top priority. It's crucial to approach the meeting with cultural sensitivity and respect for the child's customs and traditions.</b></span>
          </Card.Text>

        </Card.Body>
      </Card>


      <Card className='second_card_trip card border-0'>

        <Card.Body>
          <Card.Title className='card_header_trip'>Invitation to Experience the Impact of SAHF Education Centre</Card.Title>
          <Card.Text className='card_text_trip'>
            Dear Community Member,<br /><br />

            We are writing to invite you to spend a day with the children at the SAHF Education Centre. I believe this will be a deeply rewarding experience for you and a valuable opportunity to witness firsthand the positive impact of our organization's work.
            <br /><br />
            <span style={{ color: '#0056b3' }}><b> During your visit, you will have the chance to-</b></span> <br />
            <b>Observe the children's learning environment:</b> See how our dedicated teachers provide a nurturing and stimulating learning experience.
            <br /><br />
            <b>Interact with the children:</b> Participate in classroom activities, play games, and engage in conversations with the students.
            <br /><br />
            <b>Learn about the challenges and successes of the center:</b> Gain a deeper understanding of the needs of the children we serve and the impact of our programs.
            <br /><br />
            We are confident that this experience will leave a lasting impression on you. Your presence will not only provide valuable support to the children but also inspire others in our community to get involved in our mission.
            <br /><br />
            Thank you for your time and consideration.
            <br /><br />
            Sincerely,
            <br /><br />
            <b>Mr. Ramesh Kumar</b><br />
            Education program manager<br />
            SAHF Education Centre
          </Card.Text>
          <Card.Title className='card_below_trip text-center'>Plan your trip now at <span style={{ color: 'red' }}>sahfofficial.edu@gmail.com</span> .</Card.Title>
          <Button variant="primary" className='btn_trip'>Plan Now</Button>
        </Card.Body>
      </Card>


    </>
  )
}

export default Trip_And_Visit
