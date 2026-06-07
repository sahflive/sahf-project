import React from 'react'
import { Link } from 'react-router-dom';
import Feedback1 from '../../../../../assets/feedback/feedback1.jpg'
import './FundraisTeam.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const FundraisTeam = () => {


    // useGSAP(() => {
    //     gsap.from(".fundraising-team-heading-cont h2, .fundraising-team-heading-2-cont h3,.fundraising-team-details-cont .first-ul .first-li h4,.fundraising-team-details-cont .first-ul .first-li .second-ul li", {
    //         y: 70,
    //         scale: 0.2,
    //         duration: 0.5,
    //         delay: 0.2,
    //         opacity: 0,
    //         // transition: 3,
    //         stagger: 0.3,
    //         scrollTrigger: {
    //             trigger: ".fundraising-team-main-cont",
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
            <div className="fundraising-team-main-cont">
                <div className="fundraising-team-heading-cont">
                    <h2>Fundraising Team </h2>
                </div>
                <div className="fundraising-team-details-cont">

                    <div className="fundraising-team-heading-2-cont">
                        <h3>Fundraising Team  </h3>
                    </div>

                    <ul className='first-ul'>

                        {/* first */}
                        <li className='first-li'>
                            <h4>1. Developing a Fundraising Strategy:  </h4>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Identify Target Donors:     </h4>
                                    <ul className='third-ul'>
                                        <li>Research potential individual donors, local businesses, community groups, and foundations.   </li>
                                        <li>Focus on those aligned with the NGO's mission.    </li>

                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Create a Case for Support:   </h4>
                                    <ul className='third-ul'>
                                        <li>Develop a compelling narrative that explains the NGO's mission, impact, and needs.   </li>
                                        <li>Highlight the urgency and importance of the work.  </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Set Realistic Goals:      </h4>
                                    <ul className='third-ul'>
                                        <li>Establish achievable fundraising targets for the short and long term.     </li>
                                        <li>Break down goals into smaller, manageable steps.     </li>

                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Choose Appropriate Methods:      </h4>
                                    <ul className='third-ul'>
                                        <li>Initially, focus on low-cost, high-impact methods like online crowdfunding, social media campaigns, and local community outreach.  </li>
                                        <li>Consider hosting small, intimate fundraising events.   </li>
                                    </ul>
                                </li>
                            </ul>


                        </li>

                        {/* second  */}
                        <li className='first-li'>
                            <h4>2. Building Relationships:  </h4>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Network Actively:     </h4>
                                    <ul className='third-ul'>
                                        <li>Attend community events, connect with local leaders, and build relationships with potential donors.    </li>
                                        <li>Leverage personal networks to expand reach.    </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Cultivate Donor Relationships:     </h4>
                                    <ul className='third-ul'>
                                        <li>Thank donors promptly and personally.   </li>
                                        <li>Provide regular updates on how their contributions are making a difference.  </li>
                                        <li>Build trust and create a sense of belonging.    </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Engage Volunteers:     </h4>
                                    <ul className='third-ul'>
                                        <li>Recruit volunteers to assist with fundraising activities.   </li>
                                        <li>Utilize their skills and networks to expand reach.   </li>
                                    </ul>
                                </li>
                            </ul>

                        </li>

                        {/* third */}
                        <li className='first-li'>
                            <h4>3. Creating Fundraising Materials:    </h4>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Develop a Website and Social Media Presence:      </h4>
                                    <ul className='third-ul'>
                                        <li>Create a professional website and active social media accounts to showcase the NGO's work.   </li>
                                        <li>Use compelling visuals and stories to engage potential donors.     </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Create Fundraising Collateral:     </h4>
                                    <ul className='third-ul'>
                                        <li>Develop brochures, flyers, and other materials that clearly communicate the NGO's mission and needs.  </li>
                                        <li>Ensure all materials are visually appealing and professionally designed.    </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Craft Compelling Appeals:   </h4>
                                    <ul className='third-ul'>
                                        <li>Write persuasive fundraising letters and emails that resonate with potential donors.    </li>
                                        <li>Tell stories that highlight the impact of the NGO's work.   </li>

                                    </ul>
                                </li>
                            </ul>

                        </li>


                        {/* fourth */}
                        <li className='first-li'>
                            <h4>4. Managing Donations and Records:   </h4>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Set Up a Donation System:     </h4>
                                    <ul className='third-ul'>
                                        <li>Establish a secure and user-friendly online donation system.    </li>
                                        <li>Provide multiple donation options (e.g., one-time donations, recurring donations).     </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Maintain Accurate Records:    </h4>
                                    <ul className='third-ul'>
                                        <li>Track all donations and donor information meticulously.   </li>
                                        <li>Generate regular reports on fundraising progress.     </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Ensure Compliance:   </h4>
                                    <ul className='third-ul'>
                                        <li>Adhere to all relevant fundraising regulations and ethical guidelines.    </li>

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

export default FundraisTeam