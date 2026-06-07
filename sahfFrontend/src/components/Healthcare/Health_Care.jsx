import styles from './Health_Care.module.css'
import Health1 from '../../assets/Healthcare/Healthcare5.jpg'
import { Link, Route, Routes } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Health_Care = () => {

  useGSAP(() => {
    gsap.from(".healthcare > *", {
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
        <div className={`${styles.container} healthcare`}>

          <img className={styles.image} src={Health1} alt="Healthcare_poster" />
          <div>
            <h1>HealthCare</h1>
            <p>Our team is continuously trying and planning for this. Please keep visiting Sahf's official social media accounts and website for latest information. </p>
            <h2>Thank you for having faith in <span>SAHF.</span></h2>
            <div>
              <Link className={styles.applyButton1} to="/healthcare/sponsor-a-child">Sponsor a child</Link>
              <Link className={styles.applyButton2} to="/healthcare/give-a-gift">Give a gift</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Health_Care