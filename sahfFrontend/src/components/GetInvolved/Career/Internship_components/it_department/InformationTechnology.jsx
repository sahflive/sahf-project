import React from 'react'
import { Link } from 'react-router-dom';
import Feedback1 from '../../../../../assets/feedback/feedback1.jpg'
import './InformationTechnology.css'
const InformationTechnology = () => {
    
    return (
        <>
            <div className="information-technology-main-cont">
                <div className="information-technology-heading-cont">
                    <h2>Information Technology Department </h2>
                </div>
                <div className="information-technology-details-cont">

                    <div className="information-technology-heading-2-cont">
                        <h3>Focus: Improving Online Presence</h3>
                    </div>

                    <ul className='first-ul'>

                        {/* first */}
                        <li className='first-li'>
                            <h4>1. Website Management </h4>
                                <li>
                                    <ul className='second-ul'>
                                        <li>Assist in updating website content (events, blog posts, news).  </li>
                                        <li>Ensure all website links, forms, and media are functional. </li>
                                        <li>Help with website performance monitoring (e.g., page speed, mobile optimization).  </li>

                                    </ul>
                                </li>

                        </li>

                        {/* second  */}
                        <li className='first-li'>
                            <h4>2. Social Media Support </h4>
                                <li>
                                    <ul className='second-ul'>
                                        <li>Schedule and publish content across platforms (Facebook, Twitter, Instagram, LinkedIn).</li>
                                        <li>Monitor engagement and assist in responding to comments/messages.</li>
                                        <li>Help design simple graphics using Canva or similar tools.   </li>
                                    </ul>
                                </li>

                        </li>

                        {/* third */}
                        <li className='first-li'>
                            <h4>3. SEO and Analytics  </h4>
                            <li>
                                <ul className='second-ul'>
                                    <li>Research and add relevant keywords to website content. </li>
                                    <li>Track site traffic using Google Analytics and prepare basic reports. </li>
                                    <li>Optimize meta descriptions, titles, and tags for SEO.  </li>
                                </ul>
                            </li>
                        </li>


                        {/* fourth */}
                        <li className='first-li'>
                            <h4>4. Email Campaign Support </h4>
                            <li>
                                <ul className='second-ul'>
                                    <li>Help draft and format newsletters using Mailchimp or other tools. </li>
                                    <li>Maintain and update email subscriber lists.</li>
                                    <li>Track open and click rates and prepare summary reports.   </li>
                                </ul>
                            </li>

                        </li>


                        {/* fifth */}
                        <li className='first-li'>
                            <h4>5. Content Assistance </h4>
                            <li>
                                <ul className='second-ul'>
                                    <li>Support blog writing or editing for the NGO website. </li>
                                    <li>Assist in creating infographics or presentation slides.</li>
                                    <li>Organize and catalog digital assets (images, videos, documents).   </li>
                                </ul>
                            </li>
                        </li>

                        {/* sixth */}
                        <li className='first-li'>
                            <h4>6. Technical Support</h4>
                            <li>
                                <ul className='second-ul'>
                                    <li>Help staff with basic IT troubleshooting (email, software, logins). </li>
                                    <li>Update software and perform basic system maintenance under supervision.</li>
                                </ul>
                            </li>
                        </li>

                        {/* seventh */}
                        <li className='first-li'>
                            <h4>7. Research & Recommendations</h4>
                            <li>
                                <ul className='second-ul'>
                                    <li>Research latest digital tools for nonprofit engagement. </li>
                                    <li>Suggest improvements for online platforms or new ideas to boost visibility.</li>
                                </ul>
                            </li>
                        </li>

                        {/* eight */}
                        <li className='first-li'>
                            <h4>8. Documentation </h4>
                            <li>
                                <ul className='second-ul'>
                                    <li>Document all work done in a weekly report. </li>
                                    <li>Maintain guides or manuals for any new tools implemented.</li>
                                </ul>
                            </li>

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

export default InformationTechnology