import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";


import "./write_your_child.css";
function Write_your_child() {
  return (
    <>

      <div className="box1_write_your">
        <h1>
          Write Now! <br />
          <h3>
            Write now at{" "}
            <span style={{ color: "red" }}>sahfofficial.edu@gmail.com</span>
          </h3>
        </h1>

        <div className="textBody">
          <ul className="bulletList">
            <li>
              <i className="bi bi-disc-fill"></i>
              <span>
                Regular correspondence cultivates a personal relationship
                between the sponsor and child. This exchange allows for the
                sharing of life experiences, interests, and aspirations,
                fostering a deeper understanding and connection.
              </span>
            </li>
            <li>
              <i className="bi bi-disc-fill"></i>
              <span>
                Letters offer a valuable source of encouragement and support for
                the sponsored child. Words of affirmation and belief in their
                potential can significantly boost their self-esteem and motivate
                them to strive for their goals.
              </span>
            </li>
            <li>
              <i className="bi bi-disc-fill"></i>
              <span>
                Receiving letters from their sponsors provides a sense of hope
                and belonging for children facing adversity. Knowing that
                someone cares about them and is invested in their well-being can
                significantly impact their resilience and overall outlook.
              </span>
            </li>
            <li>
              <i className="bi bi-disc-fill"></i>
              <span>
                Letter writing provides a unique opportunity for cultural
                exchange. Sharing stories, traditions, and perspectives from
                different parts of the world broadens horizons and promotes
                cross-cultural understanding.
              </span>
            </li>
          </ul>
        </div>
       <div className="bottom_text">
        <center className="card_Para_write">
          Write now at  <span style={{color:'red'}}>sahfofficial.edu@gmail.com</span>
        </center>
        <Button variant="primary" className="btn1_write">
          Write Now
        </Button>
       </div>
        
        
      </div>


    </>
  );
}

export default Write_your_child;
