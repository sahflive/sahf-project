import styles from "./Banner.module.css";
import banner1 from "../../../assets/Body/img3.jpg";
// import banner1 from "../../../assets/Body/new_enroll1.jpg";

const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <img src={banner1} alt="Home Banner" className={styles.banner} />
      <h1 className={styles.bannerText}>
      SAVE The Daughter,<br/>EDUCATE The Child
      </h1> 
      <div className={styles.title_container}>
        <div className={styles.title}>
          <h2>WELCOME TO SAFEZONE  ACTIVE  HUMANITY FOUNDATION</h2>
          <button
            type="button"
            className={`btn btn-info ${styles.customButton}`}
          >
            Get Involved
          </button>
        </div>
      </div>
      <div className={styles.scrolling_text_container_right}>
        <span className={styles.blinking}>News Update</span>
        <marquee behavior="" direction="left">
        शिक्षा के माध्यम से बच्चों को सशक्त बनाने के लिए वर्मा क्लासेज और
          SAHF एकसाथ साझेदारी की बलिया| 23/01/2025 - बैरिया के एक प्रमुख
          शैक्षणिक संस्थान, वर्मा क्लासेज ने वंचित बच्चों के जीवन को बेहतर बनाने
          के लिए समर्पित एक गैर-लाभकारी संगठन, SAHF के साथ एक नई साझेदारी की ।
          इस साझेदारी का उद्देश्य जरूरतमंद बच्चों को गुणवत्तापूर्ण शिक्षा और
          सहायता प्रदान करना है। इस सहयोग के माध्यम से, वर्मा क्लासेज SAHF के
          कार्यक्रमों से योग्य छात्रों को छात्रवृत्ति, मुफ्त ट्यूशन और शैक्षिक
          संसाधनों तक पहुंच प्रदान करेगा। यह पहल बच्चों को गरीबी के चक्र को
          तोड़ने और उज्जवल भविष्य बनाने के लिए आवश्यक ज्ञान और कौशल से सशक्त
          बनाएगी।
        </marquee>
      </div>


      <div className={styles.scrolling_text_container_right}>
        <span className={styles.blinking}>Important!!</span>
        <marquee behavior="" direction="left">
          We are actively recruiting dedicated volunteers to join our team
        </marquee>
      </div>
    </div>
  );
};

export default Banner;
