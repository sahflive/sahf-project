import React from 'react'
import { CgArrowRightO } from "react-icons/cg";
import styles from './New_Enrollment.module.css'
import Navbar from '../Header/Navbar'
import img1 from '../../assets/new_enroll1.jpg'
import Footer from '../Footer/Footer.jsx'

const New_Enrollment = () => {
  return (
    <>
      <Navbar/>
      <div className={styles.container}>
        <img src={img1} alt="Education" className={styles.image} />
       <div className={styles.overlayText}>
    <h1>Create a little,<span>Change a lot</span> </h1>
    <p>Education empowers individuals and transforms societies by fostering knowledge, opportunity, and progress.</p>
    <button className={styles.applyButton1}>Apply Now</button>
  </div>
      </div>
      <div>
        <h2 className={styles.heading}>New Admission</h2>
        <p className={styles.description}>
         <CgArrowRightO className={styles.icon}/> Education is fundamental to human life, empowering individuals and shaping societies. It equips us with knowledge, critical thinking, and problem-solving skills, essential for navigating an ever-changing world.
          </p>
         <p className={styles.description}>
         <CgArrowRightO className={styles.icon}/> 
         On a personal level, education unlocks career opportunities, fosters self-confidence, and promotes better decision-making. It allows us to understand the world around us, think critically, and innovate.
         </p>
          <p className={styles.description}>
        <CgArrowRightO className={styles.icon}/> 
        For society, education is the bedrock of progress. It drives economic growth, fosters social harmony, and empowers citizens to participate actively in their communities. Education is a powerful tool that can bridge inequalities and create a brighter future for all.
        </p>
        <button
        type="button"
        className={`btn btn-info ${styles.applyButton2}`}>Learn More
        </button>
      </div>
      <Footer/>
      </>
  )
}

export default New_Enrollment