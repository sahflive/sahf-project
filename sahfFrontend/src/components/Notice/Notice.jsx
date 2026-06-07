import React from 'react'
import { Link } from 'react-router-dom';
import DonateImage1 from "../.././assets/notice/notice1.jpg";
import { FaAngleRight } from "react-icons/fa6";
import './Notice.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Notice = () => {

 useGSAP(() => {
        gsap.from(".notice-main-cont > *", {
            y: 40,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6,
            ease: "power2.out"
        });

        // gsap.to(".error-page-container h2", {
        //     letterSpacing: "20px",
        //     duration: 1.2,
        //     repeat: -1,
        //     yoyo: true,
        //     ease: "power1.inOut"
        // });
    });


    return (
        <>
            <div className="notice-wrapper-cont">
                <div className="notice-main-cont">
                    <div className="notice-image-cont">
                        <img src={DonateImage1} alt="Internship-Image" />
                    </div>
                    <div className="notice-heading-cont">
                        <h2>Notice Board</h2>
                    </div>

                    <div className="notice-description-container">
                        <p><FaAngleRight />  SAHF financial statement 2025. <a href="">Click Here</a> </p>
                        <p><FaAngleRight />  We are actively recruiting dedicated volunteers to join our team. <a href="">Click Here</a> </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notice