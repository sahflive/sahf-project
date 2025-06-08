import Cards from './Cards';
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer';
import img1 from '../../../assets/Way to donate/Donate_to_a_cause1.jpg';
import img2 from '../../../assets/Way to donate/Donate_to_a_cause2.jpg';
import img3 from '../../../assets/Way to donate/Donate_to_a_cause3.jpg';
import img4 from '../../../assets/Way to donate/Donate_to_a_cause4.jpg';
import img5 from '../../../assets/Way to donate/Donate_to_a_cause5.jpg';
import img6 from '../../../assets/Way to donate/Donate_to_a_cause6.jpg';
import img7 from '../../../assets/Way to donate/Donate_to_a_cause7.jpg';
import img8 from '../../../assets/Way to donate/Donate_to_a_cause8.jpg';
import img9 from '../../../assets/Way to donate/Donate_to_a_cause9.jpg';
import img10 from '../../../assets/Way to donate/Donate_to_a_cause10.jpg';
import img11 from '../../../assets/Way to donate/Donate_to_a_cause11.jpg';
import styles from './Donate_To_A_Cause.module.css';
import { CgArrowRightO } from "react-icons/cg";


const Donate_To_A_Cause = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <img src={img1} alt="" />
      <div className={styles.content}>
        <h1>How Can You Donate to Children in Need?</h1>
        <p>
          <CgArrowRightO className={styles.icon}/>
          Children face many challenges, from dangerous drinking water to harsh living conditions. 
        </p>
        {/* Cards Section */}
        <div className={styles.cardsContainer}>
          <Cards 
          image={img2}
          heading="Helps Mom & Babies Survice"
          />
          <Cards 
          image={img3}
          heading="Unsponsored Children Fund"
          />
          <Cards 
          image={img7}
          heading="Youth Development Fund"
          />
          <Cards 
          image={img4}
          heading="Medical Assistance"
          />
          <Cards 
          image={img5}
          heading="Disaster Relief"
          />
          <Cards 
          image={img6}
          heading="Clean & Sanitary Water"
          />
          <Cards 
          image={img8}
          heading="Health & Nutrition"
          />
          <Cards 
          image={img9}
          heading="Educational Need"
          />
          <Cards 
          image={img10}
          heading="Income Generation"
          />
           <Cards 
          image={img11}
          heading="Build Secure Home"
          />

        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Donate_To_A_Cause