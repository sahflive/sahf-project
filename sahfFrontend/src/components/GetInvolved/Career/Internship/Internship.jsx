import React from 'react'
import Internship1 from '../../../../assets/internship/internship1.jpg'
import './Internship.css';
import PublicRelation from '../Internship_components/public_relation/PublicRelation';
import ContentTeam from '../Internship_components/content_team/ContentTeam';
import GraphicsTeam from '../Internship_components/graphic_team/GraphicsTeam';
import SponsorshipTeam from '../Internship_components/sponsorship_team/SponsorshipTeam';
import FundraisTeam from '../Internship_components/fundraising_team/FundraisTeam';
import EducationDepartment from '../Internship_components/education_department/EducationDepartment';
import InformationTechnology from '../Internship_components/it_department/InformationTechnology';
import EventManageDepartment from '../Internship_components/event_management_department/EventManageDepartment';

const Internship = () => {
  return (
    <div>
      <div className="intership-wrapper-cont">
        <div className="internship-main-cont">
          <div className="internship-image-cont">
            <img src={Internship1} alt="Internship-Image" />
          </div>
          <div className="internship-heading-cont">
            <h2>Internship</h2>
          </div>

          <div className="about-safe-zone-info">

            <div className="about-safezone-foundation">
              <h3>About Safezne Active Humanity Foundation</h3>
              <p>The Safezone Active Humanity Foundation (SAHF) is a non-profit
                organization that aims to provide protection, assistance, and
                empowerment to people affected by conflicts, disasters, and
                human rights violations. They work to deliver millions of
                beneficiaries humanitarian aid, educational, and medical support.
              </p>
            </div>

            <div className="about-opportunity">
              <h3>About the Opportunity</h3>
              <p>
                They are looking for enthusiastic and talented individuals
                motivated to bring a change by serving humanity in their
                departments like the IT Department, Finance and Budget
                Department, Content Writing Team, Graphics and Video-editing
                Team. They shall be allotted a department based on their choice
                and shall be required to assist, aid, and contribute to
                delivering the best assistance to mankind.
              </p>
              <p>
                <span>Duration: </span>
                Minimum 12 weeks – can be extended based upon the performance.
                A minimum of 5 hours per week shall be required.
              </p>
              <p>
                <span>Application Deadline: </span>
                Applications are considered on a rolling basis based on the
                profile of the applicants. You are encouraged to apply at the
                earliest.
              </p>
            </div>

            <div className="work-condition">
              <h3>Work Condition: </h3>
              <ul>
                <li><span>Mode: </span>Hybrid</li>
                <li><span>Type: </span>Flexible</li>
                <li><span>Stipend: </span>Unpaid</li>
              </ul>
            </div>

            <div className="work-condition">
              <h3>Selection Process: </h3>
              <ul>
                <li>Online Application</li>
                <li>Shortlisting of recieved Application Forms</li>
                <li>Shortlisted candidates shall be called for a short online interview.</li>
              </ul>
            </div>

            <div className="about-safezone-foundation">
              <h3>What We Do</h3>
              <p>
                The function of NGOs is to focus on all the issues concerning
                human rights, social, environmental, and advocacy, but are not
                limited to. They can work to promote social or political change
                on a broad scale or very locally and improve society. They
                create awareness among people and become the voice of the poor
                and needy person or group.
              </p>
            </div>
            <div className="about-safezone-foundation">
              <h3>How It Works</h3>
              <p>
                When you give to their humanity, you know your donation is
                making a difference in developing society, improving communities,
                and promoting citizen participation. You can also provide aid
                or a helping hand as a volunteer or donor. You will be updated
                about the variety of activities carried out by NGOs, including
                environmental, social, advocacy, and human rights work.
              </p>
              <p>Location: India</p>
            </div>

            <div className="work-condition">
              <h3>Benefits: </h3>
              <ul>
                <li>You will be given a Certificate of Application dulyissued from the Organization</li>
                <li>If need be, the SAHF will will issue you a Letter of Recommendation(LOR) as well</li>
                <li>You will get invaluable exposure and network, which will definitely help you in future pursuits</li>
              </ul>
            </div>

            <div className="work-condition">
              <h3>Eligibilities: </h3>
              <ul>
                <li>Applicant must be a college-going student pursuing graduation from any recognized institute in India.</li>
                <li>Must be a motivated individual who wishes to work for the betterment of society.</li>
                <li>Must have a laptop or a Smartphone with a reliable internet connection.</li>
                <li>Must have fluency in English (Written and spoken).</li>
              </ul>
              <p>
                Selected applicants may opt to contribute to any other organizational
                verticals suiting their skill and/or career inclinations like social
                media, Communication, Content writing, audio-visual creatives, PR,
                Coordination, video-editing, advertising, fundraising, etc.
              </p>
              <p>
                <span>NOTE: </span>
                For department-specific eligibility criteria, please refer to
                their recruitment brochure attached to the Application Form.
              </p>
              <p>
                <span>Eligible Regions: </span>
                India
              </p>
            </div>

            <div className="work-condition">
              <h3>APPLICATION PROCESS: </h3>
              <ul>
                <li>Go to their online Application Form by clicking the “Apply Now” button.</li>
                <p>[Applications made through e-mail or any other mode shall not be accepted. Apply through the form only]</p>
                <li>Fill in the details carefully </li>
                <li>Upload required documents (in PDF only) </li>
                <li>That’s it. Done! </li>
              </ul>
            </div>


          </div>
        </div>


        <PublicRelation />
        <ContentTeam />
        <GraphicsTeam />
        <SponsorshipTeam />
        <FundraisTeam />
        <EducationDepartment />
        <InformationTechnology />
        <EventManageDepartment />
      </div>
    </div>
  )
}

export default Internship