import React from 'react'
import { Link } from 'react-router-dom';
import Feedback1 from '../../../../../assets/feedback/feedback1.jpg'
import './SponsorshipTeam.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const SponsorshipTeam = () => {

    // useGSAP(() => {
    //     gsap.from(".sponsorship-team-heading-cont h2, .sponsorship-team-heading-2-cont h3,.sponsorship-team-details-cont .first-ul .first-li h4,.sponsorship-team-details-cont .first-ul .first-li .second-ul li", {
    //         y: 70,
    //         scale: 0.2,
    //         duration: 0.5,
    //         delay: 0.2,
    //         opacity: 0,
    //         // transition: 3,
    //         stagger: 0.3,
    //         scrollTrigger: {
    //             trigger: ".sponsorship-team-main-cont",
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
            <div className="sponsorship-team-main-cont">
                <div className="sponsorship-team-heading-cont">
                    <h2>Finance & Budget Department</h2>
                </div>
                <div className="sponsorship-team-details-cont">

                    <div className="sponsorship-team-heading-2-cont">
                        <h3>Sponsorship Team </h3>
                    </div>

                    <ul className='first-ul'>

                        {/* first */}
                        <li className='first-li'>
                            <h4>I. Foundation & Strategy (Initial Phase):  </h4>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Develop a Sponsorship Strategy:    </h4>
                                    <ul className='third-ul'>
                                        <li>Identify potential sponsorship sources (local businesses, individuals, foundations, etc.).  </li>

                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Define Target Audience:   </h4>
                                    <ul className='third-ul'>
                                        <li>Identify who the NGO wants to reach (donors, volunteers, beneficiaries).  </li>
                                        <li>Tailor content to resonate with each audience. </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Create Sponsorship Materials:     </h4>
                                    <ul className='third-ul'>
                                        <li>Develop a professional sponsorship package, including:    </li>
                                        <ul>
                                            <li>NGO overview and mission statement. </li>
                                            <li>Program descriptions and impact metrics. </li>
                                            <li>Sponsorship tiers and benefits. </li>
                                            <li>Contact information. </li>
                                        </ul>
                                        <li>Design visually appealing presentations and brochures.     </li>
                                        <li>Create a basic website or social media presence to showcase the NGO.     </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Build a Prospect List:    </h4>
                                    <ul className='third-ul'>
                                        <li>Research and compile a list of potential sponsors, prioritizing those aligned with the NGO's mission.   </li>
                                        <li>Focus on local businesses and community members initially.  </li>
                                        <li>Utilize online resources, networking events, and local directories.   </li>
                                    </ul>
                                </li>
                            </ul>


                        </li>

                        {/* second  */}
                        <li className='first-li'>
                            <h4>II. Outreach & Relationship Building:   </h4>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Initiate Contact:    </h4>
                                    <ul className='third-ul'>
                                        <li>Send personalized letters or emails introducing the NGO and sponsorship opportunities.   </li>
                                        <li>Follow up with phone calls to schedule meetings.   </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Conduct Meetings & Presentations:      </h4>
                                    <ul className='third-ul'>
                                        <li>Deliver compelling presentations showcasing the NGO's work and the benefits of sponsorship.  </li>
                                        <li>Address potential sponsors' questions and concerns.  </li>
                                        <li>Build rapport and establish strong relationships.   </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Develop Tailored Proposals:    </h4>
                                    <ul className='third-ul'>
                                        <li>Customize sponsorship proposals based on individual sponsor interests and needs.   </li>
                                        <li>Clearly outline the proposed partnership and its potential impact.   </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Negotiate Sponsorship Agreements:   </h4>
                                    <ul className='third-ul'>
                                        <li>Finalize sponsorship agreements, outlining terms, benefits, and payment schedules. </li>
                                        <li>Ensure all agreements are legally sound.  </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        {/* third */}
                        <li className='first-li'>
                            <h4>III. Stewardship & Long-Term Relationships:   </h4>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Provide Regular Updates:    </h4>
                                    <ul className='third-ul'>
                                        <li>Keep sponsors informed about the NGO's progress and the impact of their contributions.   </li>
                                        <li>Send thank-you notes and acknowledgment letters.    </li>
                                        <li>Provide regular reports on program outcomes.    </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Organize Sponsor Appreciation Events:   </h4>
                                    <ul className='third-ul'>
                                        <li>Host events to recognize and thank sponsors for their support.  </li>
                                        <li>Create opportunities for sponsors to interact with beneficiaries and see the impact of their contributions.   </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Cultivate Long-Term Relationships:   </h4>
                                    <ul className='third-ul'>
                                        <li>Maintain consistent contact with sponsors.   </li>
                                        <li>Seek feedback and input.  </li>
                                        <li>Explore opportunities for ongoing collaboration and support.   </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Track and Report:    </h4>
                                    <ul className='third-ul'>
                                        <li>Maintain a detailed record of all sponsorship activities.    </li>
                                        <li>Provide regular reports to the NGO leadership on fundraising progress.   </li>
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

export default SponsorshipTeam