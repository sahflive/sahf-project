import React from 'react'
import { Link } from 'react-router-dom';
import Feedback1 from '../../../../assets/feedback/feedback1.jpg'
import './Feedback.css'

const Feedback = () => {
  return (
    <>
      <div className="feedback-wrapper-cont">
        <div className="feedback-main-cont">
            <div className="feedback-image-cont">
                   <img src={Feedback1} alt="" />
            </div>
            <div className="feedback-form-cont">
                 <Link className='feedback-btn' to='/newadmission'>
                   Feedback form
                 </Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default Feedback