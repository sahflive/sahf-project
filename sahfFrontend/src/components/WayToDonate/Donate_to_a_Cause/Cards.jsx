import styles from './Cards.module.css';


const Cards = (props) => {
  return (
    <div className={styles.Card_box}>
      <img src={props.image} alt="" />
      <div className={styles.decription}>
        <h2>{props.heading}</h2>
        <button className={styles.btn}>Donate</button>
      </div>
  
    </div>
  )
}

export default Cards