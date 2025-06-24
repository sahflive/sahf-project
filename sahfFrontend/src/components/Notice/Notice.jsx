import styles from './Notice.module.css'
import { FaAngleRight } from "react-icons/fa6";
import DonateImage1 from "../../assets/Notice/notice1.jpg";

const Notice = () => {
  return (
    <div className={styles.wrapperCont}>
      <div className={styles.imageCont}>
        <img src={DonateImage1} alt="Notice Banner" />
      </div>

      <div className={styles.headingCont}>
        <h2>Notice Board</h2>
      </div>

      <div className={styles.descriptionCont}>
        <p><FaAngleRight /> SAHF financial statement 2025. <a href="">Click Here</a></p>
        <p><FaAngleRight /> We are actively recruiting dedicated volunteers to join our team. <a href="">Click Here</a></p>
      </div>
    </div>
  )
}

export default Notice