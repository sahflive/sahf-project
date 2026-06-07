import React from "react";
import Button from "react-bootstrap/Button";

import photo1 from "../../../assets/Way to donate/ways_to_donate.jpg";
import Card from "react-bootstrap/Card";
import photo2 from "../../../assets/Way to donate/Honour_for_special.jpg";
import photo3 from "../../../assets/Way to donate/birthday_gift.jpg";
import photo4 from "../../../assets/Way to donate/moment gift.jpg";
import './other_way_to_give.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Other_way_to_give() {
   useGSAP(() => {
    gsap.from(".box1_other_way_give img,h1 ,.card_section_other .cart_other", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out"
    });

  });

  return (
    <>
      <div className="box1_other_way_give">
        <img src={photo1} alt="" />
        <h1>We can’t do this important work without your support</h1>
      </div>
      
      <div className="card_section_other">
        <Card className="cart_other" style={{ width: "25rem" }}>
          <Card.Img variant="top" src={photo2} />
          <Card.Body>
            <Card.Title>Honor Someone Special</Card.Title>
            <Card.Text>
              Honor family members or someone special. You can also make a memorial gift that helps children in need.
            </Card.Text>
            <Button variant="primary">Special Gift</Button>
          </Card.Body>
        </Card>

        <Card className="cart_other" style={{ width: "25rem" }}>
          <Card.Img variant="top" src={photo3} />
          <Card.Body>
            <Card.Title>Make a Memorial Gift </Card.Title>
            <Card.Text>
              Honor a loved one’s legacy by making a gift in their memory. You’ll support children in need and provide them a brighter future.
            </Card.Text>
            <Button variant="primary">Memorial Gift</Button>
          </Card.Body>
        </Card>

        <Card className="cart_other" style={{ width: "25rem" }}>
          <Card.Img variant="top" src={photo4} />
          <Card.Body>
            <Card.Title>Donate Your Birthday </Card.Title>
            <Card.Text>
              The value of life is not about how long you live. What matters is not the length of your life but how meaningful and impactful it is.

            </Card.Text>
            <Button variant="primary">Birthday Gift</Button>
          </Card.Body>
        </Card>
      </div>

    </>
  );
}

export default Other_way_to_give;
