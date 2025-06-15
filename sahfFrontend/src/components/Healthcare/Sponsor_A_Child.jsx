import React from 'react'
import styles from './Sponsor_A_Child.module.css'
import img1 from '../../assets/sponsor2.jpg' 
import Slider from './Slider'

const Sponsor_A_Child = () => {

  return (
    <>
    <div className={styles.container}>
      <div className={styles.img_Container}>
      <img src={img1} alt="" />
      <div className={styles.textContainer}>
        <h1>Sponsor a Child</h1>
        <p>Sponsor a child. Through child sponsorship you can help a child in need gain the means to survive. Help us reduce poverty by sponsoring a child.</p>
        <h2>How We Become a Sponsor!!</h2>
        <button className={styles.applyButton}>Click Here</button>
      </div>
      </div>
      <div className={styles.textContainer2}>
        <h1>Your Sponsorship Provides</h1>
         <Slider/>
       </div>

    </div>
    </>
  )
}

export default Sponsor_A_Child