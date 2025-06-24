import img2 from '../../assets/Healthcare/sponsor3.jpg'
import img3 from '../../assets/Healthcare/sponsor4.jpg'    
import img4 from '../../assets/Healthcare/sponsor5.jpg'
import img5 from '../../assets/Healthcare/sponsor6.jpg'  
import img6 from '../../assets/Healthcare/sponsor7.jpg'
import img7 from '../../assets/Healthcare/sponsor8.jpg'
import styles from './Slider.module.css'

const Slider = () => {
  return (
         <div className={styles.slider}>
         <div className={styles.slide_track}>
          {/* 6 Slides */}
          <div className={styles.slide}>
            <img src={img2} alt="" />
            <h2>Basic livelihood Support</h2>
          </div>
          <div className={styles.slide}>
             <img src={img3} alt="" />
             <h2>Education</h2>
          </div>
          <div className={styles.slide}>
              <img src={img4} alt="" />
              <h2>HealthCare</h2>
          </div>
          <div className={styles.slide}>
              <img src={img5} alt="" />
              <h2>Ecouraging words and support from you</h2>
          </div>
          <div className={styles.slide}>
              <img src={img6} alt="" />
              <h2>Individual mentorship and love</h2>
          </div>
          <div className={styles.slide}>
              <img src={img7} alt="" />
              <h2>A Better future</h2>
          </div>
            {/* Same 6 Slides Double */}

          <div className={styles.slide}>
            <img src={img2} alt="" />
            <h2>Basic livelihood Support</h2>
          </div>
          <div className={styles.slide}>
             <img src={img3} alt="" />
             <h2>Education</h2>
          </div>
          <div className={styles.slide}>
              <img src={img4} alt="" />
              <h2>HealthCare</h2>
          </div>
          <div className={styles.slide}>
              <img src={img5} alt="" />
              <h2>Ecouraging words and support from you</h2>
          </div>
          <div className={styles.slide}>
              <img src={img6} alt="" />
              <h2>Individual mentorship and love</h2>
          </div>
          <div className={styles.slide}>
              <img src={img7} alt="" />
              <h2>A Better future</h2>
          </div>
         </div>
        </div>
  )
}

export default Slider