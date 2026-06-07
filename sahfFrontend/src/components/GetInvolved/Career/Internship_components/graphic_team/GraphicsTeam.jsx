import React from 'react'
import { Link } from 'react-router-dom';
import Feedback1 from '../../../../../assets/feedback/feedback1.jpg'
import './GraphicTeam.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const GraphicsTeam = () => {


    // useGSAP(() => {
    //     gsap.from(".graphic-team-heading-cont h2, .graphic-team-heading-2-cont h3,.graphic-team-details-cont .first-ul .first-li h4,.graphic-team-details-cont .first-ul .first-li .second-ul li", {
    //         y: 70,
    //         scale: 0.2,
    //         duration: 0.5,
    //         delay: 0.2,
    //         opacity: 0,
    //         // transition: 3,
    //         stagger: 0.3,
    //         scrollTrigger: {
    //             trigger: ".graphic-team-main-cont",
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
            <div className="graphic-team-main-cont">
                <div className="graphic-team-heading-cont">
                    <h2>Graphic Team</h2>
                </div>
                <div className="graphic-team-details-cont">

                    <div className="graphic-team-heading-2-cont">
                        <h3>Graphic Team </h3>
                    </div>
                    <h4>Initial Activities & Tasks: </h4>
                    <ul className='first-ul'>

                        {/* first */}
                        <li className='first-li'>
                            <h4>I. Essential Marketing & Communication Materials:  </h4>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Social Media:   </h4>
                                    <ul className='third-ul'>
                                        <li>Design templates for social media posts, stories, and profile pictures to maintain a consistent visual identity.  </li>
                                        <li>Create templates for announcements, event promotions, and impact stories.  </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Presentation:     </h4>
                                    <ul className='third-ul'>
                                        <li>Develop professional presentation templates for use in meetings, workshops, and fundraising events.  </li>

                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Basic Print Materials:    </h4>
                                    <ul className='third-ul'>
                                        <li>Design business cards, letterheads, and basic brochures for initial outreach.   </li>
                                        <li>Create flyers or posters for local events or awareness campaigns.  </li>
                                    </ul>
                                </li>
                            </ul>


                        </li>

                        {/* second  */}
                        <li className='first-li'>
                            <h4>II. Content Creation & Visual Storytelling:   </h4>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Infographics & Visuals:   </h4>
                                    <ul className='third-ul'>
                                        <li>Create infographics and visuals to communicate complex data or information in an easily digestible format.  </li>
                                        <li>Use visuals to tell compelling stories about the NGO's impact.   </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Photo Editing & Manipulation:     </h4>
                                    <ul className='third-ul'>
                                        <li>Edit and enhance photos for use in website content, social media, and print materials.  </li>
                                        <li>Ensure high-quality visuals that represent the NGO's work authentically. </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Basic Video Editing:     </h4>
                                    <ul className='third-ul'>
                                        <li>Create short videos for social media or website content, if resources allow.   </li>
                                        <li>Focus on simple editing and storytelling techniques.  </li>
                                    </ul>
                                </li>
                            </ul>


                        </li>

                        {/* third */}
                        <li className='first-li'>
                            <h4>III. Ongoing Activities & Support:  </h4>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Design for Fundraising Campaigns:    </h4>
                                    <ul className='third-ul'>
                                        <li>Create visually appealing materials for fundraising campaigns, including online donation pages and social media graphics.   </li>

                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Design for Event Promotion:    </h4>
                                    <ul className='third-ul'>
                                        <li>Design promotional materials for NGO events, such as posters, invitations, and social media posts.  </li>

                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Visual Support for Reports & Presentations:     </h4>
                                    <ul className='third-ul'>
                                        <li>Create visuals for reports, presentations, and other internal or external communications. </li>

                                    </ul>
                                </li>
                            </ul>

                            <ul className='second-ul'>
                                <li>
                                    <h4>Maintaining Brand Consistency:    </h4>
                                    <ul className='third-ul'>
                                        <li>Ensure all visual materials adhere to the NGO's brand style guide.    </li>
                                        <li>Provide guidance and support to other team members on brand guidelines.   </li>
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

export default GraphicsTeam