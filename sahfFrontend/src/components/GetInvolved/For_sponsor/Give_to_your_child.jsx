import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import './GiveToYourChild.css';
function Give_to_your_child() {
  return (
    <>

      <div className="box1_give_to_your">
        <h1>Give to Your Child</h1>
        <Card className="text-center card_section_give border-0" >
          <Card.Body>

            <Card.Text>
              Giving gifts to a sponsored child can make them feel special and cared for. It can also help improve their lives by providing things they need.
            </Card.Text>
            <Button variant="primary" className='btn_card_give'>Give a Gift</Button>
          </Card.Body>

        </Card>
      </div>

    </>
  )
}

export default Give_to_your_child;

