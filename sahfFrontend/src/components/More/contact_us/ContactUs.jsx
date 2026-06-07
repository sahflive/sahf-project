import React from 'react'
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import './ContactUs.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const ContactUs = () => {

    useGSAP(() => {
        gsap.from(".contactus-main-cont > *", {
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
            <div className="contactus-wrapper-cont">
                <div className="contactus-main-cont">

                    <div className="contactus-heading-cont">
                        <h2>Contact Us</h2>
                    </div>

                    <div className="contactus-description-container">
                        <div className="left-address-container">
                            <h3>ADDRESS:</h3>
                            <p>Safezone Active Humanity Foundation,
                                Bairiya, Ballia (UP), 277201
                                WhatsApp: 7705085933</p>
                            <p><a href="">contactus.sahfofficial@gmail.com </a></p>
                        </div>
                        <div className="right-google-map-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7185.700220374429!2d84.47303300000002!3d25.775514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992905c5d375061%3A0x9f49378a5e5d2849!2sDharam%20Takies!5e0!3m2!1sen!2sus!4v1750579932952!5m2!1sen!2sus"
                                width="500"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs