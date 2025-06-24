import styles from './Donate.module.css';
import React from 'react';
import DonateImage1 from "../../assets/Donate/donate1.jpg";
import DonateImage2 from "../../assets/Donate/donate2.jpg";
import DonateImage3 from "../../assets/Donate/donate3.jpg";

const Donate = () => {
  return (
      <div className={styles.wrapperCont}>
      <div className={styles.imageCont}>
        <img src={DonateImage1} alt="Donation Banner" />
      </div>

      <div className={styles.headingCont}>
        <h2>Donation</h2>
        <p>“We make a living by what we get, but we make a life by what we give”</p>
      </div>

      <div className={styles.descriptionCont}>
        <div className={styles.left}>
          <h2>When you choose to donate, you are</h2>

          <div>
            <h4>- Empowering individuals</h4>
            <p>Your support provides access to essential resources like food, shelter, education, and healthcare, enabling people to break free from poverty and build a better future.</p>
          </div>

          <div>
            <h4>- Fostering human dignity</h4>
            <p>By offering help in times of crisis, you uphold the dignity and worth of every individual, providing compassion and community.</p>
          </div>

          <div>
            <h4>- Helping in education programs</h4>
            <p>Empowering children and young adults with knowledge and skills they need to thrive.</p>
          </div>

          <div>
            <h4>- Boosting sustainable development projects</h4>
            <p>Supporting conservation, clean water, and community-led initiatives.</p>
          </div>

          <div>
            <h4>- Helping in disaster relief efforts</h4>
            <p>Delivering timely aid to those impacted by emergencies and disasters.</p>
          </div>

          <h3>Every donation, no matter the size, makes a difference. Your contribution can have a lasting impact.</h3>
        </div>

        <div className={styles.right}>
          <div className={styles.image2}>
            <img src={DonateImage2} alt="Donation Visual 1" />
          </div>

          <div className={styles.image3}>
            <img src={DonateImage3} alt="Donation Visual 2" />
            <h3>MAKE A RECORD</h3>
            <p>UPI ID - ravisinghkushwaha@okhdfcbank</p>
            <a href="#" title="Fill out form">FILL OUT FORM</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate