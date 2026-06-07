import React from "react";
import styles from "./Impact_Areas.module.css";
import { CgArrowRightO } from "react-icons/cg";
import Card_img from '../../../assets/img5.jpg'
const Impact_Areas = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Impact Areas</h1>
      <div className={styles.section}>
        {/* Left Section*/}
        <div className={styles.Left_section}>
          <h2 className={styles.Education_heading}>Why Education</h2>

          <div className={styles.dropdowns}>
            <div className={`dropdown-center ${styles.dropdown}`}>
              <button
                className={`btn btn-secondary dropdown-toggle ${styles.dropdown_button}`}
                type="button"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                1. Awareness or the lack of it
              </button>
              <ul className={`dropdown-menu ${styles.dropdown_menu}`}>
                <li>
                  <CgArrowRightO className={styles.icon}/>
                  Adequate knowledge regarding breastfeeding practice was found
                  in only one-third of the antenatal mothers in two studies.
                </li>
                <br />
                <li>
                  <CgArrowRightO className={styles.icon}/>
                  Moving ahead in the lifecycle, a study in urban Haryana found
                  that only 11.3% of the adolescent girls studied knew correctly
                  about key reproductive health issues.
                </li>
                <br/>
                <li>
                  <CgArrowRightO className={styles.icon}/>A review article on geriatric morbidity found
                  that 20.3% of participants were aware of common causes of
                  prevalent illness and their prevention.
                </li>
                <br/>
                <li className={styles.last}>
                  <CgArrowRightO className={styles.icon}/>
                  The message is clear – we must strive to raise awareness in
                  those whom we work with and must encourage the younger
                  generation to believe in the power of education for behavior
                  change.
                </li>
              </ul>
            </div>

            <div className={`dropdown-center ${styles.dropdown}`}>
              <button
                className={`btn btn-secondary dropdown-toggle ${styles.dropdown_button}`}
                type="button"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                2. Access or the lack of it
              </button>
              <ul className={`dropdown-menu ${styles.dropdown_menu}`}>
                <li>
                  <CgArrowRightO className={styles.icon} />
                  Physical reach is one of the basic determinants of access,
                  defined as “ the ability to enter a healthcare facility within
                  5 km from the place of residence or work” Using this
                  definition, a study in India in 2012 found that in rural
                  areas, only 37% of people were able to access IP facilities
                  within a 5 km distance, and 68% were able to access
                  out-patient facilities Krishna and Ananthapur, in their 2012
                  paper, postulate that in general, the more rustic (rural)
                  one's existence – the further one lives from towns – the
                  greater are the odds of disease, malnourishment, weakness, and
                  premature death.
                </li>
                <br/>
                <li className={styles.last}>
                  <CgArrowRightO className={styles.icon}/>
                  We must encourage discussion on the determinants of access to
                  healthcare. We should identify and analyze possible barriers
                  to access in the financial, geographic, social, and
                  system-related domains, and do our best to get our students
                  and peers thinking about the problem of access to good quality
                  healthcare.
                </li>
              </ul>
            </div>

            <div className={`dropdown-center ${styles.dropdown}`}>
              <button
                className={`btn btn-secondary dropdown-toggle ${styles.dropdown_button}`}
                type="button"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                3. Absence or the humanpower crisis in healthcare
              </button>
              <ul className={`dropdown-menu ${styles.dropdown_menu}`}>
                <li>
                  <CgArrowRightO className={styles.icon}/>
                  Any discussion on healthcare delivery should include arguably
                  the most central of the characters involved – the human
                  workforce.
                </li>
                <br/>
                <li>
                  <CgArrowRightO className={styles.icon}/>A 2011 study estimated that India has roughly
                  20 health workers per 10,000 population.
                </li>
                <br/>
                <li>
                  <CgArrowRightO className={styles.icon}/>
                  The lack of a qualified person at the point of delivery when a
                  person has traveled a fair distance to reach is a big
                  discouragement to the health-seeking behavior of the
                  population. According to the rural health statistics of the
                  Government of India (2015), about 10.4% of the sanctioned
                  posts of auxiliary nurse midwives are vacant, which rises to
                  40.7% of the posts of male health workers. Twenty-seven
                  percentage of doctor posts at PHCs were vacant, which is more
                  than a quarter of the sanctioned posts.
                </li>
                <br/>
                <li className={styles.last}>
                  <CgArrowRightO className={styles.icon}/>
                  It is time for a policy on health human power to be
                  articulated, which must outline measures to ensure that the
                  last Indian is taken care of by a sensitive, trained, and
                  competent healthcare worker.
                </li>
              </ul>
            </div>

            <div className={`dropdown-center ${styles.dropdown}`}>
              <button
                className={`btn btn-secondary dropdown-toggle ${styles.dropdown_button}`}
                type="button"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                4. Affordability or the cost of healthcare
              </button>
              <ul className={`dropdown-menu ${styles.dropdown_menu}`}>
                <li>
                  <CgArrowRightO className={styles.icon}/>
                  It is common knowledge that the private sector is the dominant
                  player in the healthcare arena in India.
                </li>
                <br/>
                <li>
                  <CgArrowRightO className={styles.icon}/>
                  Almost 75% of healthcare expenditure comes from the pockets of
                  households, and catastrophic healthcare cost is an important
                  cause of impoverishment.
                </li>
                <br/>
                <li>
                  <CgArrowRightO className={styles.icon}/>
                  The public sector offers healthcare at low or no cost but is
                  perceived as being unreliable, of indifferent quality and
                  generally is not the first choice, unless one cannot afford
                  private care.
                </li>
              </ul>
            </div>

            <div className={`dropdown-center ${styles.dropdown}`}>
              <button
                className={`btn btn-secondary dropdown-toggle ${styles.dropdown_button}`}
                type="button"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                5. Accountability or the lack of it
              </button>
              <ul className={`dropdown-menu ${styles.dropdown_menu}`}>
                <li>
                  <CgArrowRightO className={styles.icon}/>
                  Being accountable has been defined as the procedures and
                  processes by which one party justifies and takes
                  responsibility for its activities. References
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Right Section*/}
        <div className={styles.Right_section}>
          <h2 className={styles.Education_Healthcare}>Why HealthCare</h2>
    
          <div className={styles.dropdowns}>
            <div className={`dropdown-center ${styles.dropdown}`}>
              <button
                className={`btn btn-secondary dropdown-toggle ${styles.dropdown_button}`}
                type="button"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                1. Accountability or the lack of it
              </button>
              <ul className={`dropdown-menu ${styles.dropdown_menu}`}>
                <li>
                  <CgArrowRightO className={styles.icon}/>
                  Being accountable has been defined as the procedures and
                  processes by which one party justifies and takes
                  responsibility for its activities. References
                </li>
              </ul>
            </div>

            <div className={`dropdown-center ${styles.dropdown}`}>
              <button
                className={`btn btn-secondary dropdown-toggle ${styles.dropdown_button}`}
                type="button"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                2. Absence or the humanpower crisis in healthcare
              </button>
              <ul className={`dropdown-menu ${styles.dropdown_menu}`}>
                <li>
                  <CgArrowRightO className={styles.icon}/>
                  Any discussion on healthcare delivery should include arguably
                  the most central of the characters involved – the human
                  workforce.
                </li>
                <br/>
                <li>
                  <CgArrowRightO className={styles.icon}/>A 2011 study estimated that India has roughly
                  20 health workers per 10,000 population.
                </li>
                <br/>
                <li>
                  <CgArrowRightO className={styles.icon}/>
                  The lack of a qualified person at the point of delivery when a
                  person has traveled a fair distance to reach is a big
                  discouragement to the health-seeking behavior of the
                  population. According to the rural health statistics of the
                  Government of India (2015), about 10.4% of the sanctioned
                  posts of auxiliary nurse midwives are vacant, which rises to
                  40.7% of the posts of male health workers. Twenty-seven
                  percentage of doctor posts at PHCs were vacant, which is more
                  than a quarter of the sanctioned posts.
                </li>
                <br/>
                <li className={styles.last}>
                  <CgArrowRightO className={styles.icon}/>
                  It is time for a policy on health human power to be
                  articulated, which must outline measures to ensure that the
                  last Indian is taken care of by a sensitive, trained, and
                  competent healthcare worker.
                </li>
              </ul>
            </div>

            <div className={`dropdown-center ${styles.dropdown}`}>
              <button
                className={`btn btn-secondary dropdown-toggle ${styles.dropdown_button}`}
                type="button"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                3. Absence or the humanpower crisis in healthcare
              </button>
              <ul className={`dropdown-menu ${styles.dropdown_menu}`}>
                <li>
                  <CgArrowRightO className={styles.icon}/>
                  Any discussion on healthcare delivery should include arguably
                  the most central of the characters involved – the human
                  workforce.
                </li>
                <br/>
                <li>
                  <CgArrowRightO className={styles.icon}/>A 2011 study estimated that India has roughly
                  20 health workers per 10,000 population.
                </li>
                <br/>
                <li>
                  <CgArrowRightO className={styles.icon}/>
                  The lack of a qualified person at the point of delivery when a
                  person has traveled a fair distance to reach is a big
                  discouragement to the health-seeking behavior of the
                  population. According to the rural health statistics of the
                  Government of India (2015), about 10.4% of the sanctioned
                  posts of auxiliary nurse midwives are vacant, which rises to
                  40.7% of the posts of male health workers. Twenty-seven
                  percentage of doctor posts at PHCs were vacant, which is more
                  than a quarter of the sanctioned posts.
                </li>
                <br/>
                <li className={styles.last}>
                  <CgArrowRightO className={styles.icon}/>
                  It is time for a policy on health human power to be
                  articulated, which must outline measures to ensure that the
                  last Indian is taken care of by a sensitive, trained, and
                  competent healthcare worker.
                </li>
              </ul>
            </div>

            <div className={`dropdown-center ${styles.dropdown}`}>
              <button
                className={`btn btn-secondary dropdown-toggle ${styles.dropdown_button}`}
                type="button"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                4. Accountability or the lack of it
              </button>
              <ul className={`dropdown-menu ${styles.dropdown_menu}`}>
                <li>
                  <CgArrowRightO className={styles.icon}/>
                  Being accountable has been defined as the procedures and
                  processes by which one party justifies and takes
                  responsibility for its activities. References
                </li>
              </ul>
            </div>

            <div className={`dropdown-center ${styles.dropdown}`}>
              <button
                className={`btn btn-secondary dropdown-toggle ${styles.dropdown_button}`}
                type="button"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                5. Accountability or the lack of it
              </button>
              <ul className={`dropdown-menu ${styles.dropdown_menu}`}>
                <li>
                  <CgArrowRightO className={styles.icon}/>
                  Being accountable has been defined as the procedures and
                  processes by which one party justifies and takes
                  responsibility for its activities. References
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact_Areas;
