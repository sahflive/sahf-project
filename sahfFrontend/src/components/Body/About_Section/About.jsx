import styles from './About.module.css';
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import About_img from '../../../assets/Body/img5.jpg'

const About = () => {
  return (
       <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content_section}>
            <div className={styles.title}>
              <h1>Who We Are</h1>
            </div>
            <div className={styles.content}>
              <h3>"A Mission for Change"</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum odit delectus suscipit, labore consequatur inventore perferendis a autem hic excepturi assumenda dignissimos in?</p>
              <div className={styles.button}>
                <a href="">Know More</a>
              </div>
            </div>
            <div className={styles.social}>
              <a href=""><FaWhatsapp /></a>
              <a href=""><FaSquareInstagram /></a>
              <a href=""><BsTwitterX /></a>
            </div>
          </div>
          <div className={styles.image_section}>
            <img src={About_img} alt="" />
          </div>
        </div>
      </div>
  )
}

export default About