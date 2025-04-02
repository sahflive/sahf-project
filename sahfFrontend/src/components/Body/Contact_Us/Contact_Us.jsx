import React from 'react';
import styles from './Contact_Us.module.css';
import Contact_Us_img from '../../../assets/contact-us.jpg';

const Contact_Us = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        
        {/* 🔹 Image on Left */}
        <div className={styles.image_section}>
          <img src={Contact_Us_img} alt="Join Us" />
        </div>

        {/* 🔹 Content on Right */}
        <div className={styles.content_section}>
          <div className={styles.title}>
            <h1>Want To Join</h1>
          </div>
          <div className={styles.content}>
            <h3>Be a Proud Member</h3>
            <p>
              When you bring together those who have, with those who have not - miracles happen. 
              Become a time hero by volunteering with us. Meet new friends, gain new skills, 
              get happiness and have fun!
            </p>
            <div className={styles.button}>
              <a href="#">Join Now</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact_Us;
