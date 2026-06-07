import styles from './Laws_and_policy.module.css'
import img1 from '../../../assets/About us/Who_we_are3.jpg';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { coreLaws } from '../../../assets/assets';


const ToggleItem = ({ title,subtitle1,subtitle2,subtitle3,subtitle4,subtitle5,subtitle6,subtitle7,subtitle8,description1,description2,description3,description4,description5,description6,description7,description8,description9,description10,description11,description12,description13,description14,description15,description16,
description17,description18,description19,description20,description21,description22,description23,description24,description25,description }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.accordionItem}>
      <div onClick={() => setOpen(!open)} className={styles.accordionHeader}>
        <span>{title}</span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {open && (
        <div className={styles.accordionContent}>
          <span>{subtitle4}</span>
          {description1 && <p>{description1}</p>}
           <span>{subtitle5}</span>
          {description2 && <p>{description2}</p>}
           <span>{subtitle6}</span>
          {description3 && <p>{description3}</p>}
           <span>{subtitle7}</span>
          {description4 && <p>{description4}</p>}
          <span>{subtitle8}</span>
          <span>{subtitle1}</span>
          {description5 && <p>{description5}</p>}
          {description6 && <p>{description6}</p>}
          {description7 && <p>{description7}</p>}
          {description8 && <p>{description8}</p>}
          <span>{subtitle2}</span>
          {description9 && <p>{description9}</p>}
          {description10 && <p>{description10}</p>}
          {description11 && <p>{description11}</p>}
          {description12 && <p>{description12}</p>}
          {description13 && <p>{description13}</p>}
          <span>{subtitle3}</span>
          {description14 && <p>{description14}</p>}
          {description15 && <p>{description15}</p>}
          {description16 && <p>{description16}</p>}
          {description17 && <p>{description17}</p>}
          {description18 && <p>{description18}</p>}
          {description19 && <p>{description19}</p>}
          {description20 && <p>{description20}</p>}
          {description21 && <p>{description21}</p>}
          {description22 && <p>{description22}</p>}
          {description23 && <p>{description23}</p>}
          {description24 && <p>{description24}</p>}
          {description25 && <p>{description25}</p>}
          {description && <p>{description}</p>}
        
        </div>
      )}
    </li>
  );
};
const Laws_and_policy = () => {
  return (
        <>
    <div className={styles.heroSection}>
      <img src={img1} alt="Policy" />
      <div className={styles.content}>
        <h1>LAW & POLICY</h1>
      </div>
    </div>
    <div className={styles.FAQs}>
      <ul className={styles.accordionList}>
        {coreLaws.map((item, index) => (
          <ToggleItem key={index} {...item} />
        ))}
      </ul>
    </div>
  </>
  )
}

export default Laws_and_policy