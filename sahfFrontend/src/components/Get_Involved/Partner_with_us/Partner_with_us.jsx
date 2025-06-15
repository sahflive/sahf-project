import styles from "./Partner_with_us.module.css"
import img1 from '../../../assets/Get Involved/partner_with_us1.jpg'

const Partner_with_us = () => {
  return (
    <div className={styles.container}>
      <img src={img1} alt="" />
      <div className={styles.content} >
        <h1>Partner With Us</h1>
        <p>SAFEZONE Active Humanity Foundation welcomes partnerships and collaborations to further its mission of empowering students and building a brighter future. Through this coaching institute, the foundation strives to unlock the potential of every child and foster a more inclusive educational landscape.</p>
        <div className={styles.benefits}>
          <h1>Your Benefits</h1>
          <h2>Community Engagement and Outreach</h2>
          <ul>
            <li><strong>Increased visibility-</strong>Providing institutions with greater exposure.</li>
             <li><strong>Improved reputation-</strong>Enhance institution's image as a socially responsible and community-oriented organization.</li>
             <li><strong>Enhanced trust-</strong>Which can be beneficial for institutions seeking to establish a positive presence.</li>
          </ul>


           <h2>Resource Sharing and Expertise</h2>
           <ul>
            <li><strong>Access to expertise- </strong>SAHF have specialized knowledge and skills in specific areas, such as community development, environmental conservation, or social justice.</li>
            <li><strong>Shared resources- </strong>Collaborating with SAHF can allow institutions to pool resources and leverage each other's strengths.</li>
            <li><strong>Cost-effective solutions-</strong>By partnering with SAHF, institutions can often achieve their goals more efficiently and cost-effectively.</li>
           </ul>

           <h2>Impact and Effectiveness</h2>
           <ul>
            <li><strong>Greater impact-</strong>SAHF can help institutions measure and evaluate their social impact, ensuring that their efforts are making a tangible difference.</li>
            <li><strong>Sustainability- </strong>SAHF can provide long-term support and sustainability for projects and initiatives.</li>
            <li><strong>Increased accountability-</strong>Working with SAHF can help institutions be more accountable to their stakeholders and the public.</li>
           </ul>

             <h2>Advocacy and Policy Change</h2>
           <ul>
            <li><strong>Advocacy efforts- </strong>SAHF can advocate for policies and programs that align with an institution's goals.</li>
            <li><strong>Influence on decision-making-  </strong>By partnering with SAHF, institutions can have a greater influence on policy decisions and social change.</li>
           </ul>

            <h2>Employee Engagement and Development</h2>
           <ul>
            <li><strong>Meaningful work-</strong>Collaborating with SAHF can provide employees with opportunities to engage in meaningful work and contribute to a positive social impact.</li>
            <li><strong>Skill development-  </strong> Working with SAHF can help employees develop new skills and competencies.</li>
            <li><strong>Increased job satisfaction-</strong>Employees who feel connected to their work and the community are often more satisfied and engaged.</li>
           </ul>
            </div>
            <div className={styles.content2}>
              <div className={styles.heading2}>
                <h1>Criteria And Expectation From Institutions</h1>
                <p>The coaching institute will provide tailored instruction, engage teaching methods, and comprehensive study materials (free NCERT books). Extracurricular activities (FUN DAY- once in a week) accompanied by 'indoor games'.</p>
                <div className={styles.criteria}>
                <ul>
                  <li>-Independence Day (15 Aug)</li>
                  <li>-Teachers' day (5 Sep)</li>
                  <li>Children's day (14 Nov)</li>
                  <li>-Republic day (26 Jan).</li>
                  <p>The community has shown tremendous support for this endeavor, recognizing its potential to transform the lives of young learners.</p>
                </ul>

                <ul>
                  <li><strong>Curriculum and Syllabus-</strong>Mathematics, Science, Hindi, English, General Knowledge</li>
                  <ul>
                  <li><strong>Preference for Admission-</strong>Peoples who are financially weak and can't spare the price of proper diet, shelter or lack in basic needs.</li>
                  <li>-Those who can't afford complementary study materials or tuition fees.</li>
                  <li>-Those who have no legal or observant guardians.</li>
                  </ul>
                  <li><strong>Fee Structure and Refund Policy-</strong>No tuition fees (Donation may be collected as per your wish).</li>
                  <li><strong>Privacy and Confidentiality-</strong>Maintain confidentiality of student records and information. Comply with data protection laws to safeguard student privacy. </li>
                  <li><strong>Anti-discrimination Policy-</strong>Implement policies that promote diversity and prevent discrimination based on race, gender, religion, caste or other protected characteristics.</li>
                  <li><strong>Parental Involvement-</strong>Monthly PTM Punctuality and discipline are thoroughly considered in addition to 'daily attendance'.</li>
                </ul>
                </div>
                <button>Apply Now</button>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Partner_with_us