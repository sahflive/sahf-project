import styles from './Home.module.css'
import About from '../Body/About_Section/About.jsx';
import Banner from '../Body/Home_Section/Banner.jsx';
import Navbar from '../Header/Navbar.jsx';
import Transformlives from '../Body/Card_Section/Transformlives.jsx';
import Impact_Areas from '../Body/Impact Areas/Impact_Areas.jsx';
import Priority from '../Body/Priority/Priority.jsx';
import Contact_Us from '../Body/Contact_Us/Contact_Us.jsx';
import Partners from '../Body/Partners/Partners.jsx';
import Achivement from '../Body/Odometer/Achivement.jsx';
import Footer from '../Footer/Footer.jsx';
import Slider from '../Healthcare/Slider.jsx';

const Home = () => {
  return (
     <div className={styles.container}>
      <Navbar/>
      <Banner/>
      <About/>
      <Achivement/>
      <Transformlives/>
      <Impact_Areas/>
      <Priority/>
      <Contact_Us/>
      <Partners/>
      <Footer/>

     </div>
  )
}

export default Home;