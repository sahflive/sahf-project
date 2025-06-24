import styles from './Join_us.module.css';
import img1 from '../../../assets/Get Involved/join_us1.jpg'
import img2 from '../../../assets/Get Involved/join_us2.jpg'
import img3 from '../../../assets/Get Involved/join_us3.jpg'

const Join_us = () => {
  return (
   <>
   <div className={styles.container}>
    <img src={img1} alt="" />
    <div className={styles.heading}>
     <h1>Ways to get involved</h1>
     <div className={styles.sections}>
     {/* left portion */}
     <div className={styles.left_Container}>
        <div>
          <img src={img2} alt="" />
        <div>
            <h1>Volunteer</h1>
          <p>By offering your time, skills, or resources, you help those in need and contribute to creating a better world. Volunteering not only benefits others but can also bring you a sense of fulfillment, personal growth, and happiness.</p>
          <button>Register Now</button>
        </div>
        </div>
     </div>
     {/* Right portion */}
   <div className={styles.right_Container}>
        <div>
          <img src={img3} alt="" />
        <div>
            <h1>Become a SAHF member</h1>
          <p>We are looking for enthusiastic and talented individuals motivated enough to bring a change by serving the humanity in our various departments. <span>We are actively recruiting dedicated volunteers to join our team.</span></p>
          <button>Register Now</button>
        </div>
        </div>
     </div>
     </div>
    </div>
   </div>
   </>
  )
}

export default Join_us