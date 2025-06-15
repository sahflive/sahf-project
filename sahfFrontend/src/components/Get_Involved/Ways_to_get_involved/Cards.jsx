import styles from './Cards.module.css';
import {Link} from 'react-router-dom'


const Cards = (props) => {
  return (
    <div className={styles.Card_box}>
      <img src={props.image} alt="" />
      <div className={styles.decription}>
        <h2>{props.heading}</h2>
        <Link className={styles.btn} to='/partner_with_us'>Register Now</Link>
      </div>
  
    </div>
  )
}

export default Cards