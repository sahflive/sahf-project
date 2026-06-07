import React from 'react'
import { Link } from 'react-router-dom';
import Feedback1 from '../../../../../assets/feedback/feedback1.jpg'
import './EducationDepartment.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const EducationDepartment = () => {

    // useGSAP(() => {
    //     gsap.from(".education-department-heading-cont h2, .education-department-heading-2-cont h3,.education-department-details-cont .first-ul .first-li h4,.education-department-details-cont .first-ul .first-li .second-ul li", {
    //         y: 70,
    //         scale: 0.2,
    //         duration: 0.5,
    //         delay: 0.2,
    //         opacity: 0,
    //         // transition: 3,
    //         stagger: 0.3,
    //         scrollTrigger: {
    //             trigger: ".education-department-main-cont",
    //             scroller: "body",
    //             markers: true,
    //             scrub: 5,
    //             toggleActions: "play none none reverse",
    //             start: "top 100%",
    //             end: "bottom 100%",

    //         }
    //     })
    // });





    return (
        <>
            <div className="education-department-main-cont">
                <div className="education-department-heading-cont">
                    <h2>Education Department </h2>
                </div>
                <div className="education-department-details-cont">

                    <div className="education-department-heading-2-cont">
                        <h3>Education Department Team  </h3>
                    </div>

                    <ul className='first-ul'>

                        {/* first */}
                        <li className='first-li'>
                            <h4>I. Community-Based Learning & Cultural Integration:  </h4>

                            <ul className='second-ul'>
                                <li>
                                    <h4>1."Gyan Mela" (Knowledge Fair):     </h4>
                                    <ul className='third-ul'>
                                        <li>Activity: A community-wide fair showcasing student projects, cultural performances, and interactive learning exhibits.   </li>
                                        <li>Focus: Science experiments, local art forms, storytelling, traditional games, and environmental awareness.  </li>
                                        <li>Relevance: Celebrates local culture, promotes community participation, and makes learning fun and accessible.  </li>

                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>2."Kahani Sunao, Gyan Badhao" (Tell Stories, Increase Knowledge):   </h4>
                                    <ul className='third-ul'>
                                        <li>Activity: Storytelling sessions featuring folktales, historical narratives, and moral stories, followed by interactive discussions and creative writing exercises.    </li>
                                        <li>Focus: Language development, critical thinking, and cultural appreciation.  </li>
                                        <li>Relevance: Leverages India's rich storytelling tradition and promotes literacy.   </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>3."Paryavaran Jagrukta Abhiyan" (Environmental Awareness Campaign): </h4>
                                    <ul className='third-ul'>
                                        <li>Activity: Field trips to local parks, riverbanks, or farms, followed by workshops on waste management, conservation, and sustainable practices.   </li>
                                        <li>Focus: Environmental education, practical skills, and civic responsibility.   </li>
                                        <li>Relevance: Addresses pressing environmental challenges and promotes awareness of local ecosystems.  </li>

                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>4. "Gali Pathshala" (Street School):      </h4>
                                    <ul className='third-ul'>
                                        <li>Activity: Organize a pop up school in a community space, or gali. Teach basic literacy and numeracy.   </li>
                                        <li>Focus: Accessible education to those who miss school, and to promote educational values in the community. </li>
                                        <li>Relevance: Many children from very poor families do not attend school.  </li>
                                    </ul>
                                </li>
                            </ul>


                        </li>

                        {/* second  */}
                        <li className='first-li'>
                            <h4>II. Skill-Building & Creative Expression:  </h4>

                            <ul className='second-ul'>
                                <li>
                                    <h4>1."Vigyan Pradarshani" (Science Exhibition):     </h4>
                                    <ul className='third-ul'>
                                        <li>Activity: Students create and present science projects, experiments, and models.   </li>
                                        <li>Focus: Scientific inquiry, problem-solving, and presentation skills.  </li>
                                        <li>Relevance: Encourages STEM (Science, Technology, Engineering, and Mathematics) education and innovation.   </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>2."Kala Utsav" (Art Festival):     </h4>
                                    <ul className='third-ul'>
                                        <li>Activity: A festival showcasing student artwork, including paintings, drawings, crafts, and performing arts. </li>
                                        <li>Focus: Creative expression, artistic skills, and cultural appreciation.  </li>
                                        <li>Relevance: Celebrates India's diverse art forms and encourages artistic talent.    </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>3."Ganit Ki Paathshala" (Maths School):    </h4>
                                    <ul className='third-ul'>
                                        <li>Activity: Make learning math fun with games, and puzzles.    </li>
                                        <li>Focus: Logical thinking, problem solving, and making math fun.   </li>
                                        <li>Relevance: Math is a subject many children struggle with.    </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>4."Computer Gyan Kendra" (Computer Knowledge Center):     </h4>
                                    <ul className='third-ul'>
                                        <li>Activity: Basic computer literacy workshops, coding classes, and digital art sessions.   </li>
                                        <li>Focus: Digital literacy, technological skills, and future readiness.   </li>
                                        <li>Relevance: Addresses the growing need for digital skills in India.  </li>
                                    </ul>
                                </li>
                            </ul>

                        </li>

                        {/* third */}
                        <li className='first-li'>
                            <h4>III. Interactive Learning & Engagement:   </h4>

                            <ul className='second-ul'>
                                <li>
                                    <h4>1."Quiz Pe Quiz" (Quiz Challenge):    </h4>
                                    <ul className='third-ul'>
                                        <li>Activity: Educational quizzes on various subjects, including history, geography, science, and current affairs.   </li>
                                        <li>Focus: Knowledge retention, critical thinking, and healthy competition. </li>
                                        <li>Relevance: Promotes awareness of Indian history, culture, and current events.  </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>2."Natak Manch" (Drama Stage):     </h4>
                                    <ul className='third-ul'>
                                        <li>Activity: Students perform short plays and skits on social issues, historical events, or literary works.   </li>
                                        <li>Focus: Communication skills, teamwork, and social awareness.    </li>
                                        <li>Relevance: Uses drama as a tool for social commentary and education.   </li>
                                    </ul>
                                </li>
                            </ul>

                        </li>


                        {/* fourth */}
                        <li className='first-li'>
                            <h4>IV. College & Training:   </h4>

                            <ul className='second-ul'>
                                <li>
                                    <ul className='third-ul'>
                                        <li>1year /6 months apprenticeship,    </li>
                                        <li>Art classes,   </li>
                                        <li>Baking classes,   </li>
                                        <li>Bussiness skills,   </li>
                                        <li>Computers,   </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <ul className='third-ul'>
                                        <li>English skills,    </li>
                                        <li>Music lessons,     </li>
                                        <li>Sewing workshop,     </li>
                                        <li>Sports camp,     </li>
                                        <li>Textbooks   </li>
                                    </ul>
                                </li>
                            </ul>

                        </li>

                    </ul>


                    <div className="apply-btn-cont">
                        <Link className='apply-btn' title='Apply Now' to='/home'>Apply Now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EducationDepartment