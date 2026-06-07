import React from 'react'
import { Link } from 'react-router-dom';
import DonateImage1 from "../.././assets/donate/donate1.jpg";
import DonateImage2 from "../.././assets/donate/donate2.jpg";
import DonateImage3 from "../.././assets/donate/donate3.jpg";
import './Donate.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Donate = () => {

    useGSAP(() => {
        gsap.from(".donate-main-cont > *", {
            y: 40,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6,
            ease: "power2.out"
        });

    });

    return (
        <>
            <div className="donate-wrapper-cont">
                <div className="donate-main-cont">
                    <div className="donate-image-cont">
                        <img src={DonateImage1} alt="Internship-Image" />
                    </div>
                    <div className="donate-heading-cont">
                        <h2>Donation</h2>
                        <p>“We make a living by what we get, but we make a life by what we give” </p>
                    </div>

                    <div className="donate-description-container">
                        <div className="donate-left">
                            <h2>When you choose to donate, you are</h2>
                            <div className="you-are-doing">
                                <h4>-Empowering individuals</h4>
                                <p>Your support provides access to essential resources like food, shelter, education, and healthcare, enabling people to break free from poverty and build a better future for themselves and their families.</p>
                            </div>
                            <div className="you-are-doing">
                                <h4>-Fostering human dignity</h4>
                                <p>By offering a helping hand during times of crisis, you uphold the inherent dignity and worth of every human being. You offer compassion, understanding, and a sense of community to those who are struggling.</p>
                            </div>
                            <div className="you-are-doing">
                                <h4>-Helping in education programs</h4>
                                <p>Empowering children and young adults with the knowledge and skills they need to thrive.</p>
                            </div>
                            <div className="you-are-doing">
                                <h4>-Boosting sustainable development projects</h4>
                                <p>Supporting environmental conservation, clean water initiatives, and community-led development programs.</p>
                            </div>
                            <div className="you-are-doing">
                                <h4>-Helping in disaster relief efforts</h4>
                                <p>Empowering children and young adults with the knowledge and skills they need to thrive.</p>
                            </div>


                            <h3>Every donation, no matter the size, makes a difference. Your contribution, however small, can have a profound and lasting impact on the lives of those in need.</h3>
                        </div>



                        <div className="donate-right">
                            <div className="donate-image2">
                                <img src={DonateImage2} alt="" />
                            </div>
                            <div className="donate-image3">
                                <img src={DonateImage3} alt="" />
                                <h3>MAKE A RECORD</h3>

                                <p>UPI ID - ravisinghkushwaha@okhdfcbank</p>
                                <a href="" title='Fill out form'>FILL OUT FORM</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Donate