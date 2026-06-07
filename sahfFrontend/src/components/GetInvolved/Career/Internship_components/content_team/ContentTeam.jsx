import React from 'react'
import { Link } from 'react-router-dom';
import Feedback1 from '../../../../../assets/feedback/feedback1.jpg'
import './ContentTeam.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const ContentTeam = () => {



    // useGSAP(() => {
    //     gsap.from(".content-team-heading-cont h2, .content-team-heading-2-cont h3,.content-team-details-cont .first-ul .first-li h4,.content-team-details-cont .first-ul .first-li .second-ul li", {
    //         y: 70,
    //         scale: 0.2,
    //         duration: 0.5,
    //         delay: 0.2,
    //         opacity: 0,
    //         // transition: 3,
    //         stagger: 0.3,
    //         scrollTrigger: {
    //             trigger: ".content-team-main-cont",
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
            <div className="content-team-main-cont">
                <div className="content-team-heading-cont">
                    <h2>Content Team</h2>
                </div>
                <div className="content-team-details-cont">

                    <div className="content-team-heading-2-cont">
                        <h3>Content Team </h3>
                    </div>
                    <h4>Initial Activities & Tasks: </h4>
                    <ul className='first-ul'>

                        {/* first */}
                        <li className='first-li'>
                            <h4>1. Content Strategy & Planning : </h4>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Develop a Content Calendar:  </h4>
                                    <ul className='third-ul'>
                                        <li>Plan content themes and topics aligned with NGO's goals. </li>
                                        <li>Create a schedule for content creation and distribution. </li>
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
                                    <h4>Establish Brand Voice & Style:   </h4>
                                    <ul className='third-ul'>
                                        <li>Determine the tone and style of content (e.g., informative, inspirational, action-oriented).  </li>
                                        <li>Create a style guide for consistency. </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Website Content Audit & Creation:    </h4>
                                    <ul className='third-ul'>
                                        <li>Ensure website content is up-to-date and engaging.  </li>
                                        <li>Create compelling "About Us," "Programs," and "Donate" pages.  </li>
                                    </ul>
                                </li>
                            </ul>


                        </li>

                        {/* second  */}
                        <li className='first-li'>
                            <h4>2. Content Creation (Ongoing):  </h4>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Storytelling:    </h4>
                                    <ul className='third-ul'>
                                        <li>Share stories of beneficiaries and volunteers.  </li>
                                        <li>Highlight the impact of the NGO's work.  </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Educational Content:   </h4>
                                    <ul className='third-ul'>
                                        <li>Create informative articles and blog posts about the NGO's cause. </li>
                                        <li>Share relevant statistics and data.  </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Call to Action Content:   </h4>
                                    <ul className='third-ul'>
                                        <li>Encourage donations, volunteer sign-ups, and event participation.  </li>
                                        <li>Create compelling calls to action for social media and website.  </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Visual Storytelling:  </h4>
                                    <ul className='third-ul'>
                                        <li>Capture high-quality photos and videos of NGO activities.  </li>
                                        <li>Create engaging graphics for social media posts.  </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        {/* third */}
                        <li className='first-li'>
                            <h4>3. Social Media Engagement (Ongoing):  </h4>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Platform Selection:   </h4>
                                    <ul className='third-ul'>
                                        <li>Focus on 2-3 key platforms (e.g., Facebook, Instagram, LinkedIn).  </li>

                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Consistent Posting:   </h4>
                                    <ul className='third-ul'>
                                        <li>Maintain a regular posting schedule.  </li>
                                        <li>Use relevant hashtags and engage with followers.  </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Community Building:   </h4>
                                    <ul className='third-ul'>
                                        <li>Respond to comments and messages.   </li>
                                        <li>Run contests and polls to increase engagement. </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Social Media Analytics:   </h4>
                                    <ul className='third-ul'>
                                        <li>Track key metrics (reach, engagement, follower growth).   </li>
                                        <li>Use data to optimize content strategy.  </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>


                        {/* fourth */}
                        <li className='first-li'>
                            <h4>4. Collaboration & Communication:  </h4>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Regular Team Meetings:   </h4>
                                    <ul className='third-ul'>
                                        <li>Discuss content ideas and progress.  </li>
                                        <li>Provide feedback and support.  </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Content Review Process:    </h4>
                                    <ul className='third-ul'>
                                        <li>Establish a process for reviewing and approving content.   </li>
                                        <li>Ensure accuracy and consistency.   </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Cross-Departmental Collaboration:    </h4>
                                    <ul className='third-ul'>
                                        <li>Work with other departments (e.g., fundraising, programs) to create integrated content.   </li>
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

export default ContentTeam