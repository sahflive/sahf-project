import styles from './Account.module.css';
import img1 from '../../../assets/About us/Who_we_are4.jpg';

const Account = () => {
  return (
    <div className={styles.container}>
      <img src={img1} alt="account-poster" />
              <div className={styles.poster_text}>
              <h1>Accountability Report</h1>
              <p> Legal Policy & Behavioral Code (Amended) 2023</p>
              <button className={styles.btn}>Download</button>
              </div>
    </div>
  )
}

export default Account