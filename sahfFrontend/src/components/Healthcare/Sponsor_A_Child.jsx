import React from 'react'
import styles from './Sponsor_A_Child.module.css'
import img1 from '../../assets/Healthcare/sponsor2.jpg'
import Slider from './Slider'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Sponsor_A_Child = () => {

  useGSAP(() => {
    gsap.from(".sponsor-child > *", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out"
    });

  });

  return (
    <>
      <div>
        <div className={styles.nav_background_cont}>
        </div>

        <div className={`${styles.container} sponsor-child`}>
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
            <Slider />
          </div>

        </div>
      </div>
    </>
  )
}

export default Sponsor_A_Child