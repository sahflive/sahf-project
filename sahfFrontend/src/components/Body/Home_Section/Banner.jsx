import styles from "./Banner.module.css";
import banner1 from "../../../assets/img4.jpg";

const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <img src={banner1} alt="Home Banner" className={styles.banner} />
      <h1 className={styles.bannerText}>
        Save The Daughter
        <br />
        Educate The Child
      </h1>
      <div className={styles.title_container}>
        <div className={styles.title}>
      <h2 >
        WELCOME TO SAFEZONE ACTIVE HUMANITY FOUNDATION
      </h2>
      <button type="button" className={`btn btn-info ${styles.customButton}`}>Get Involved</button>
      </div>
      </div>
      <div className={styles.scrolling_text_container_left}>
      <marquee behavior="" direction="left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          vero ex nulla totam doloribus, voluptate, dolores ullam deleniti
          ducimus soluta asperiores quia esse?
        </marquee>
        <span>News Update</span>
      </div>
      <div className={styles.scrolling_text_container_right}>
      <span>Important!!</span>
      <marquee behavior="" direction="right">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          vero ex nulla totam doloribus, voluptate, dolores ullam deleniti
          ducimus soluta asperiores quia esse?
        </marquee>
        
      </div>
    </div>
  );
};

export default Banner;
