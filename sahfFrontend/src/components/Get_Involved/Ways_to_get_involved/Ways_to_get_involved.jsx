import styles from './Ways_to_get_involved.module.css'
import img1 from '../../../assets/Get involved/ways_to_join1.jpg';
import img7 from '../../../assets/Get involved/ways_to_join7.jpg';
import img8 from '../../../assets/Get involved/ways_to_join8.jpg';
import img9 from '../../../assets/Get involved/ways_to_join9.jpg';
import img10 from '../../../assets/Get involved/ways_to_join10.jpg';
import img11 from '../../../assets/Get involved/ways_to_join11.jpg';
import img12 from '../../../assets/Get involved/ways_to_join12.jpg';
import Slider from './Slider';
import Cards from './Cards';


const Ways_to_get_involved = () => {
  return (
    <>
    <div className={styles.container}>
      <img src={img1} alt="" />
      <div className={styles.content}>
        <h1>Ways to get Involved</h1>
        <Slider/>
      </div>
    </div>
          {/* Cards Section */}
        <div>
          <div className={styles.partnerSection}>
            <h1>Partner With Us</h1>
            <p>SAFEZONE Active Humanity Foundation welcomes partnerships and collaborations to further its mission of empowering students and building a brighter future. Through this coaching institute, the foundation strives to unlock the potential of every child and foster a more inclusive educational landscape.</p>
          </div>
         <div className={styles.cardsContainer}>
          <Cards 
          image={img7}
          heading="Schools/Coachings & others"
          />
          <Cards 
          image={img8}
          heading="Bussinesses"
          />
          <Cards 
          image={img9}
          heading="Events & Festivals"
          />
          <Cards 
          image={img10}
          heading="Speaker & Artists"
          />
          <Cards 
          image={img11}
          heading="SAHF Career"
          />
          <Cards 
          image={img12}
          heading="Press Media"
          />
        </div>
        </div>
    </>
  )
}

export default Ways_to_get_involved