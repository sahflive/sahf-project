import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Feedback1 from '../../../../../assets/feedback/feedback1.jpg'
import './PublicRelation.css'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PublicRelation = () => {

    const [lastscrollTop, setLastscrollTop] = useState(0);
    const [screenWidth, setscreenWidth] = useState(1448);

    useEffect(() => {
        const currentWidth = window.innerWidth;
        setscreenWidth(currentWidth);
    }, [screenWidth])

    // useEffect(() => {
    //     const scrollHandler = (dets) => {
    //         setLastscrollTop(lastscrollTop);
    //         if (dets.deltaY > 0) {
    //             gsap.to(".text-container", {
    //                 transform: "translateX(-200%)",
    //                 duration: 5,
    //                 repeat: -1,
    //                 ease: 'none'
    //             })

    //             gsap.to(".text-container .arrow-left", {
    //                 rotate: 0,
    //             })
    //         } else {
    //             gsap.to(".text-container", {
    //                 transform: "translateX(0%)",
    //                 duration: 5,
    //                 repeat: -1,
    //                 ease: 'none'
    //             })

    //             gsap.to(".text-container .arrow-left", {
    //                 rotate: 180,
    //             })

    //         }
    //     }

    //     window.addEventListener('wheel', scrollHandler)
    // }, [lastscrollTop]);



    // useGSAP(() => {
    //     gsap.from(".public-relation-heading-cont h2, .public-relation-heading-2-cont h3, .public-relation-details-cont .responsbilities h4,.responsbilities p, .responsbilities ul li ", {
    //         y: 10,
    //         scale: 0.2,
    //         duration: 0.5,
    //         delay: 0.2,
    //         opacity: 0,
    //         transition: 3,
    //         stagger: 0.3,
    //         scrollTrigger: {
    //             trigger: ".public-relation-main-cont",
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
            <div className="public-relation-main-cont">
                <div className="public-relation-heading-cont">
                    <h2>Public Relation Department</h2>
                </div>
                <div className="public-relation-details-cont">

                    <div className="public-relation-heading-2-cont">
                        <h3>Public Relation Team </h3>
                    </div>

                    <div className="responsbilities">
                        <h4>Responsibilities: </h4>
                        <p>
                            As an Outreach & Education Intern, you will be at the
                            forefront of expanding our reach and connecting vital
                            resources to small NGOs, community groups, individuals,
                            and local poor students across India. Your key responsibilities
                            will include:
                        </p>
                    </div>
                    <div className="responsbilities">
                        <h4>Connecting with Small NGOs & Groups:   </h4>
                        <ul>
                            <li>Identifying and researching small, grassroots NGOs, community groups, and individual initiatives working with underprivileged students across India. </li>
                            <li>Reaching out to these organizations/groups through various online channels (email, social media, phone where appropriate or you can go there) to understand their needs and challenges. </li>
                            <li>Building and maintaining a database of potential groups.
                            </li>
                        </ul>
                    </div>
                    <div className="responsbilities">
                        <h4>Connecting with Individuals & Students:     </h4>
                        <ul>
                            <li>Identifying and connecting with individual philanthropists, educators, or community leaders who are passionate about supporting poor students. </li>
                            <li>Reaching out to local poor students or networks that support them to understand their coaching needs.
                            </li>

                        </ul>
                    </div>
                    <div className="responsbilities">
                        <h4>Facilitating Connections:     </h4>
                        <ul>
                            <li>Acting as a bridge between the identified NGOs/groups/individuals and the coaching resources offered by Safezone Active Humanity Foundation. </li>
                            <li>Understanding the specific needs of both the resource providers and the beneficiaries to ensure effective matching.
                            </li>
                        </ul>
                    </div>
                    <div className="responsbilities">
                        <h4>Presentation Development:   </h4>
                        <ul>
                            <li>Creating compelling and informative PowerPoint (PPT) presentations that clearly outline the coaching programs offered by Safezone Active Humanity Foundation.  </li>
                        </ul>
                    </div>

                    <div className="responsbilities">
                        <h4>Offer By SAHF:   </h4>
                        <ul>
                            <li>Material Support</li>
                            <li>Educator Support</li>
                            <li>Organising Events with/for Students</li>
                            <li>And situational extra support</li>
                            <br />
                            <br />
                            <li>Highlighting the key advantages and benefits of these coaching programs for small NGOs, groups, individuals, and students. </li>
                            <li>Tailoring presentations to different target audiences.</li>
                        </ul>
                    </div>

                    <div className="responsbilities">
                        <h4>Documentation & Reporting:     </h4>
                        <ul>
                            <li>Maintaining clear records of outreach efforts, contacts made, and connections facilitated. </li>
                            <li>Assisting in the preparation of reports on outreach progress and impact. </li>
                        </ul>
                    </div>

                    <div className="apply-btn-cont">
                        <Link className='apply-btn' title='Apply Now' to='/home'>Apply Now</Link>
                    </div>

                </div>



            </div>
        </>
    )
}

export default PublicRelation