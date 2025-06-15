import img2 from "../../../assets/Get Involved/ways_to_join2.jpg";
import img3 from "../../../assets/Get Involved/ways_to_join3.jpg";
import img4 from "../../../assets/Get Involved/ways_to_join4.jpg";
import img5 from "../../../assets/Get Involved/ways_to_join5.jpg";
import img6 from "../../../assets/Get Involved/ways_to_join6.jpg";
import styles from "./Slider.module.css";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slide_track}>
        {/* 6 Slides */}
        <div className={styles.slide}>
          <img src={img2} alt="" />
          <h2>Donate to Meet a Need</h2>
          <div>
            <p>
              {" "}
              Whether it's money, goods, or time—to help someone who is
              struggling or in need of support. This could be donating clothes
              to a shelter, giving money to a charity, or volunteering your time
              to help with a cause.{" "}
            </p>
            <button>
              <Link className={styles.btn1} to="/Donate_to_a_cause">
                Donate Now
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.slide}>
          <img src={img3} alt="" />
          <h2>Become a Volunteer</h2>
          <div>
            <p>
              {" "}
              Life’s most persistent and urgent question is: What are you doing
              for others?" – Martin Luther King Jr
            </p>
            <button>Register Now</button>
          </div>
        </div>
        <div className={styles.slide}>
          <img src={img4} alt="" />
          <h2>The SAHF Experience</h2>
          <div>
            <p>Invitation to Experience the Impact of SAHF Education Centre</p>

            <Link to="/sahf_experience" className={styles.btn2}>
              Visit Now
            </Link>
          </div>
        </div>
        <div className={styles.slide}>
          <img src={img5} alt="" />
          <h2>Write Your Child</h2>
          <div>
            <p>
              {" "}
              Words of affirmation and belief in their potential can
              significantly boost their self-esteem and motivate them to strive
              for their goals.{" "}
            </p>
             <Link to="/write_your_child" className={styles.btn2}>
              Visit Now
            </Link>
          </div>
        </div>
        <div className={styles.slide}>
          <img src={img6} alt="" />
          <h2>Visit Your Child</h2>
          <div>
            <p>
              {" "}
              Visiting your child with a positive mindset can be a wonderful way
              to share love, encouragement, and good energy.
            </p>
             <Link to="/sahf_experience" className={styles.btn2}>
              Visit Now
            </Link>
          </div>
        </div>
        <div className={styles.slide}>
          <img src={img4} alt="" />
          <h2>The SAHF Experience</h2>
          <div>
            <p>Invitation to Experience the Impact of SAHF Education Centre</p>

            <Link to="/sahf_experience" className={styles.btn2}>
              Visit Now
            </Link>
          </div>
        </div>
        {/* Same 5 Slides Double */}

        <div className={styles.slide}>
          <img src={img2} alt="" />
          <h2>Donate to Meet a Need</h2>
          <div>
            <p>
              {" "}
              Whether it's money, goods, or time—to help someone who is
              struggling or in need of support. This could be donating clothes
              to a shelter, giving money to a charity, or volunteering your time
              to help with a cause.{" "}
            </p>
            <button>
              <Link className={styles.btn1} to="/Donate_to_a_cause">
                Donate Now
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.slide}>
          <img src={img3} alt="" />
          <h2>Become a Volunteer</h2>
          <div>
            <p>
              {" "}
              Life’s most persistent and urgent question is: What are you doing
              for others?" – Martin Luther King Jr
            </p>
            <button>Register Now</button>
          </div>
        </div>
        <div className={styles.slide}>
          <img src={img4} alt="" />
          <h2>The SAHF Experience</h2>
          <div>
            <p>Invitation to Experience the Impact of SAHF Education Centre</p>

            <Link to="/sahf_experience" className={styles.btn2}>
              Visit Now
            </Link>
          </div>
        </div>
        <div className={styles.slide}>
          <img src={img5} alt="" />
          <h2>Write Your Child</h2>
          <div>
            <p>
              {" "}
              Words of affirmation and belief in their potential can
              significantly boost their self-esteem and motivate them to strive
              for their goals.{" "}
            </p>
            <Link to="/write_your_child" className={styles.btn2}>
              Write Now!
            </Link>
          </div>
        </div>
        <div className={styles.slide}>
          <img src={img6} alt="" />
          <h2>Visit Your Child</h2>
          <div>
            <p>
              {" "}
              Visiting your child with a positive mindset can be a wonderful way
              to share love, encouragement, and good energy.
            </p>
              <Link to="/sahf_experience" className={styles.btn2}>
              Visit Now
            </Link>
          </div>
        </div>
        <div className={styles.slide}>
          <img src={img4} alt="" />
          <h2>The SAHF Experience</h2>
          <div>
            <p>Invitation to Experience the Impact of SAHF Education Centre</p>

            <Link to="/sahf_experience" className={styles.btn2}>
              Visit Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
