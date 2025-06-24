import styles from './Who_we_are.module.css';
import img1 from '../../../assets/About us/Who_we_are1.jpg';
import Our_team from './Our_team';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';



const ToggleItem = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.accordionItem}>
      <div onClick={() => setOpen(!open)} className={styles.accordionHeader}>
        <span>{title}</span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {open && <p className={styles.accordionContent}>{description}</p>}
    </li>
  );
};
const Who_we_are = () => {

 const coreValues = [
    {
      title: 'Honesty and Integrity',
      description: "Honesty and integrity underpin our organization's commitment to ethical conduct and transparent operations...",
    },
    {
      title: 'Teamwork and Collaboration',
      description: 'We believe in the power of collective action. By fostering collaboration and shared purpose...',
    },
    {
      title: 'Commitment and Determination',
      description: 'Commitment and determination underscore the SAHF’s belief in steadfast perseverance...',
    },
    {
      title: 'Accountability and Responsibility',
      description: 'Accountability and Responsibility stem from a commitment to transparency, ethical conduct...',
    },
  ];


  return (
    <div className={styles.container}>
      <img src={img1} alt="Company-poster" />
      <div className={styles.content}>
        <div className={styles.poster_text}>
        <h1>About SAFEZONE Active Humanity Foundation</h1>
        <p>The Safezone Active Humanity Foundation (SAHF) is a non-profit organization that aims to provide protection, assistance, and empowerment to people affected by conflicts, disasters, and human rights violations. We work to deliver humanitarian aid, educational, and medical support to millions of beneficiaries.</p>
        </div>
        <div className={styles.sections}>
          <div className={styles.left_section}>
              <h1>VISION</h1>
              <p>To awaken the humanity in order to activate them (Active Humanity) so as to make them vital for a happy, healthy and loving world (SAFEZONE). This very vision is the driving force that makes us SAFEZONE Active Humanity Foundation.</p>
          </div>
           <div className={styles.right_section}>
              <h1>MISSION</h1>
              <p>SAFEZONE Active Humanity Foundation aims to provide, facilitate and cater basic rights of human i.e., Education and Healthcare so as to empower the needy and deprived people by mind and body.
                <br />
              Our objective is to ensure these basic rights by deploying humanitarian collective actions directly as well as social networks. We believe that this is the only way by which the noble idea of humanity can be achieved.
              </p>
          </div>
        </div>
        <div className={styles.core_values}>
          <h2>Our Core Values</h2>
            <h3>1. Work Ethic</h3>
            <p>A strong work ethic is fundamental to SAHF's success. It drives efficiency, productivity, and a commitment to fulfilling our mission.</p> 

            <ul className={styles.accordionList}>
            {coreValues.map((item, index) => (
              <ToggleItem key={index} {...item} />
            ))}
          </ul>
          <div className={styles.core_content}>
          <ul>
            <h3>2. Enthusiasm</h3>
            <p>Enthusiasm fuels our commitment to SAHF's mission.It drives innovation, inspires teamwork,and empowers us to create lasting change.</p>
          </ul>
           <ul>
            <h3>3. Empathy</h3>
            <p>We believe in deeply understanding the experiences of those we serve, fostering compassion and creating solutions that truly address their needs.</p>
          </ul>
           <ul>
            <h3>4. Creativity</h3>
            <p>Creativity is a catalyst for positive change. We believe fostering innovation and original thinking is crucial to achieving our mission.</p>
          </ul>
            <ul>
            <h3>5. Charity</h3>
            <p>Charity embodies our commitment to social responsibility. We believe in the transformative power of collective generosity to address pressing societal needs and build stronger communities.</p>
          </ul>
          </div>
         <p>"Fueled by <span>work ethic,</span> ignited by <span>enthusiasm,</span>driven by <span>empathy,</span> shaped by <span> creativity,</span> enriched by <span> charity. </span>" </p>
        </div>
      </div>
       <Our_team/>
    </div>
  )
}

export default Who_we_are