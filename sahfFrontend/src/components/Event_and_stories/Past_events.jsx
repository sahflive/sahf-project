import React from 'react';
import './past-events.css'; // for optional image shape or styles

import MyNavbar from '../navbar/MyNavbar';
import free_food_img from './events_img/FREE FOOD DISTRIBUTION.jpg'
import  inaguration_of_campaign_img from './events_img/INAGURATION OF CAMPAIGN.jpg';

import education_img from './events_img/teachersday.jpg'
import cultural_activity_img from './events_img/cultural_activity.jpg'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Footer from '../Footer/Footer';
function Past_events() {
  return (
    <>
    <MyNavbar></MyNavbar>
     <Row className="row_past">
        <Col className="column_past">PAST EVENTS</Col>
      </Row>
    <div className='board_past'>
    <div className="container my-5">
      <div className="card shadow border-0 p-3">
        <div className="row g-0 d-flex align-items-center">
          {/* Left Side Image */}
          <div className="col-md-5 d-flex flex-column align-items-center justify-content-center text-center mb-4 mb-md-0">
            <img
              src={education_img}
              alt="Teachers Day Celebration"
              className="img-fluid "
              style={{ maxHeight: '300px', objectFit: 'cover', borderRadius:'8px'}}
            />
            <p className="mt-3 mb-1 fw-semibold card_date_past"><b>On 5 September 2023</b></p>
            <p className="mb-0 text-uppercase card_text_heading_past">SAHF Coaching Institute</p>
          </div>

          {/* Right Side Text */}
          <div className="col-md-7 p-4">
            <h5 className="text-primary fw-bold text-uppercase mb-3 card_title_text_past">
              CULTURAL AND EDUCATION FUNCTION AT SAHF COACHING INSTITUTE
            </h5>
            <p className="mb-0 card_body_text_past">
              On 5 September 2023, a program was organised to tell our students about the
              importance of a teacher and their significant role in one's life. Students learned
              how a good teacher can mould their future. They were also told about our 2nd
              president, Dr. Sarvepalli Radhakrishnan. Cake and candies were distributed
              amongst all.
            </p>
          </div>
        </div>
      </div>
    </div>
    
   <div className="container my-5">
      <div className="card shadow border-0 p-3">
        <div className="row g-0 d-flex align-items-center">
          {/* Left Side Image */}
          <div className="col-md-5 d-flex flex-column align-items-center justify-content-center text-center mb-4 mb-md-0">
            <img
              src={free_food_img}
              alt="Teachers Day Celebration"
              className="img-fluid "
              style={{ maxHeight: '300px', objectFit: 'cover' , borderRadius:'8px'}}
            />
            <p className="mt-3 mb-1 fw-semibold card_date_past">4th October 2022</p>
            <p className="mb-0 text-uppercase card_text_heading_past">NOIDA SECTOR 16-B NEAR EKMURTI</p>
          </div>

          {/* Right Side Text */}
          <div className="col-md-7 p-4">
            <h5 className="text-primary fw-bold text-uppercase mb-3 card_title_text_past">
              FREE FOOD DISTRIBUTION CAMPAIGN ON NOIDA SECTOR 16-B NEAR EKMURTI
            </h5>
            <p className="mb-0 card_body_text_past">
              Recently, a food distribution campaign was successfully organized by our foundation on 4th October 2022, in greater noida (Ekmurti), sector 16-B. This event was executed from 12p.m to 5p.m. We are glad to notify that almost 1300-1500 people were benefited by our event. After the completion of campaign, the flaws and asset were concluded by our volunteers to make improvements in future so that more and more peoples can be benefited by us, also further plans and aims were discussed by them. 
            </p>
          </div>
        </div>
      </div>
    </div>


    <div className="container my-5">
      <div className="card shadow border-0 p-3">
        <div className="row g-0 d-flex align-items-center">
          {/* Left Side Image */}
          <div className="col-md-5 d-flex flex-column align-items-center justify-content-center text-center mb-4 mb-md-0">
            <img
              src={cultural_activity_img}
              alt="Teachers Day Celebration"
              className="img-fluid "
              style={{ maxHeight: '300px', objectFit: 'cover' , borderRadius:'8px' }}
            />
            <p className="mt-3 mb-1 fw-semibold card_date_past">On 15 August 2022</p>
            <p className="mb-0 text-uppercase card_text_heading_past">SAHF Coaching Institute</p>
          </div>

          {/* Right Side Text */}
          <div className="col-md-7 p-4">
            <h5 className="text-primary fw-bold text-uppercase mb-3 card_title_text_past">
              CULTURAL AND EDUCATION FUNCTION AT SAHF COACHING INSTITUTE
            </h5>
            <p className="mb-0 card_body_text_past">
              On 15 August 2022, we a special event for our students. They were told about our great Indian history, our freedom fighters and martyrs. The program started with flag hosting and national anthem. Many more activities like singing, dancing, drama was organised. After the completion of programs sweets and snacks were distributed, they were also encouraged to participate in other non-academic programs to enhance their skills. 
            </p>
          </div>
        </div>
      </div>
    </div>
    

     <div className="container my-5">
      <div className="card shadow border-0 p-3">
        <div className="row g-0 d-flex align-items-center">
          {/* Left Side Image */}
          <div className="col-md-5 d-flex flex-column align-items-center justify-content-center text-center mb-4 mb-md-0">
            <img
              src={inaguration_of_campaign_img}
              alt="Teachers Day Celebration"
              className="img-fluid "
              style={{ maxHeight: '300px', objectFit: 'cover' , borderRadius:'8px', border:'1px solid black' }}
            />
            <p className="mt-3 mb-1 fw-semibold card_text_heading_past">INAGURATION OF CAMPAIGN: <span style={{color:'green'}}>DREAM OF LIFE</span> </p>
           
          </div>

          {/* Right Side Text */}
          <div className="col-md-7 p-4">
            <h5 className="text-primary fw-bold text-uppercase mb-3 card_title_text_past">
              INAGURATION OF CAMPAIGN: DREAM OF LIFE
            </h5>
            <p className="mb-0 card_body_text_past">
              Today, SAFEZONE-ActiveHumanityFoundation has inaugurated a coaching institute for children studying up to the 8th standard. This institution will operate in SAHF head office, near Dharam Talkis Cinema Hall Bariya, Ballia Uttar PradeshBallia Uttar Pradesh. Firstly, Ayush Kushwaha explained the purpose of this event. The goal of the foundation is to give free education to students with poor financial so that they can compete in this world with an edge in education. SAHF, provide free coaching to students as coaching become a vital part of today's education infrastructure. On the very first day, nearly 50 students and eighty parents have shown interest in this new program. Also, by the end of this event, we manage to enroll about 35 students for the upcoming session 2022-23. All students will benefit from our program. 
            </p>
          </div>
        </div>
      </div>
    </div>

    </div>


    <Footer></Footer>
    </>
  );
}

export default Past_events;
