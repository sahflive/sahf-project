import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import republic_img from "../../assets/Event_and_stories/upcoming/republic day.jpg";
import independence_img from "../../assets/Event_and_stories/upcoming/independence day.jpg";
import children_img from "../../assets/Event_and_stories/upcoming/childrenday.jpg";
import teacher_img from "../../assets/Event_and_stories/upcoming/teachersday.jpg";

import './upcoming-events.css';

function Upcoming_events() {
  return (
    <>

      <Row className="row_upcoming">
        <Col className="column_upcoming">UPCOMING EVENTS</Col>
      </Row>
      <div className='card_upcoming'>
        <Card className='card_body_upcoming' style={{ width: '19rem' }}>
          <Card.Img className='img_card_upcoming' variant="top" src={republic_img} />
          <Card.Body>
            <Card.Title className='card_title_text_upcoming'>Republic day (26 Jan)</Card.Title>
            <Card.Text className='card_body_text_upcoming'>
              Flag hoisting, patriotic songs, and cultural performances are held with great pride.
            </Card.Text>

          </Card.Body>
        </Card>

        <Card className='card_body_upcoming' style={{ width: '20rem' }}>
          <Card.Img className='img_card_upcoming' variant="top" src={independence_img} />
          <Card.Body>
            <Card.Title className='card_title_text_upcoming'>Independence Day (15 Aug)</Card.Title>
            <Card.Text className='card_body_text_upcoming'>
              Parades, flag ceremonies, and cultural events are organized to honour the nation.
            </Card.Text>

          </Card.Body>
        </Card>

        <Card className='card_body_upcoming' style={{ width: '19rem' }}>
          <Card.Img className='img_card_upcoming' variant="top" src={teacher_img} />
          <Card.Body>
            <Card.Title className='card_title_text_upcoming'>Teachers' day (5 Sept)</Card.Title>
            <Card.Text className='card_body_text_upcoming'>
              Students host performances, games, and speeches to express gratitude to teachers
            </Card.Text>

          </Card.Body>
        </Card>

        <Card className='card_body_upcoming' style={{ width: '19rem' }}>
          <Card.Img className='img_card_upcoming' variant="top" src={children_img} />
          <Card.Body>
            <Card.Title className='card_title_text_upcoming'>Children's day (14 Nov)</Card.Title>
            <Card.Text className='card_body_text_upcoming'>
              The day includes fun games, shows, and cultural acts dedicated to celebrating kids.
            </Card.Text>

          </Card.Body>
        </Card>

      </div>


    </>
  )
}

export default Upcoming_events
