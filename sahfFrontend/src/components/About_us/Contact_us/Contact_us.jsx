import styles from './Contact_us.module.css';
import { FaAngleRight } from "react-icons/fa6";

const Contact_us = () => {
  return (
    <div className={styles.wrapperCont}>
      <div className={styles.mainCont}>
        <div className={styles.headingCont}>
          <h2>Contact Us</h2>
        </div>

        <div className={styles.descriptionCont}>
          <div className={styles.leftAddress}>
            <h3>ADDRESS:</h3>
            <p>
              Safezone Active Humanity Foundation, Bairiya, Ballia (UP), 277201<br />
              WhatsApp: 7705085933
            </p>
            <p>
              <a href="mailto:contactus.sahfofficial@gmail.com">
                contactus.sahfofficial@gmail.com
              </a>
            </p>
          </div>

          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7185.700220374429!2d84.47303300000002!3d25.775514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992905c5d375061%3A0x9f49378a5e5d2849!2sDharam%20Takies!5e0!3m2!1sen!2sus!4v1750579932952!5m2!1sen!2sus"
              width="500"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SAHF Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_us;
