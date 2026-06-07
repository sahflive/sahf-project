import styles from './FAQs.module.css'
import img1 from '../../../assets/About us/Who_we_are2.jpg';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { coreFAQs } from '../../../assets/assets';


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
const FAQs = () => {
  return (
    <>
       <div className={styles.heroSection}>
         <img src={img1} alt="Policy" />
         <div className={styles.content}>
           <h1>Frequently Asked Question's</h1>
         </div>
       </div>
   
       <div className={styles.FAQs}>
         <ul className={styles.accordionList}>
           {coreFAQs.map((item, index) => (
             <ToggleItem key={index} {...item} />
           ))}
         </ul>
       </div>
     </>
  )
}

export default FAQs