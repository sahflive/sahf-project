import styles from './Health_Care.module.css'
import Health1 from '../../assets/Healthcare5.jpg'
import { Link, Route,Routes } from 'react-router-dom';


const Health_Care = () => {
  return (
  <>
  <div className={styles.container}>
  <img className={styles.image} src={Health1} alt="Healthcare_poster" />
<div>
    <h1>HealthCare</h1>
    <p>Our team is continuously trying and planning for this. Please keep visiting Sahf's official social media accounts and website for latest information. </p>
     <h2>Thank you for having faith in <span>SAHF.</span></h2>
  <div>
    <Link className={styles.applyButton1} to="/Sponsor_A_Child">Sponsor a child</Link>
    <Link className={styles.applyButton2} to="/Give_A_Gift">Give a gift</Link>
  </div>
  </div>
  </div>
  </>
  )
}

export default Health_Care