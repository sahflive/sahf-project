import React, { useRef } from 'react';
import MotherSon from "../../assets/mother-son-1.jpg";
import './Ourgiftwishlist.css';
import Babies from './Ourgiftwishlist/Babies';
import Mother from './Ourgiftwishlist/Mother';
import Girls from './Ourgiftwishlist/Girls';
import Boys from './Ourgiftwishlist/Boys';
import Parent from './Ourgiftwishlist/Parent';
import Elderly from './Ourgiftwishlist/Elderly';
import Book from './Ourgiftwishlist/Book';
import Income from './Ourgiftwishlist/Income';
import Collage from './Ourgiftwishlist/Collage';
import Health from './Ourgiftwishlist/Health';
import Children from './Ourgiftwishlist/Children';
import WaterEnergy from './Ourgiftwishlist/WaterEnergy';
import Hunger from './Ourgiftwishlist/Hunger';
import Bundles from './Ourgiftwishlist/Bundles';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Ourgiftwishlist = () => {

    const babieRef = useRef(null);
    const motherRef = useRef(null);
    const girlRef = useRef(null);
    const boyRef = useRef(null);
    const parentRef = useRef(null);
    const elderlyRef = useRef(null);
    const bookRef = useRef(null);
    const incomeRef = useRef(null);
    const collageRef = useRef(null);
    const healthRef = useRef(null);
    const childrenRef = useRef(null);
    const waterenergyRef = useRef(null);
    const hungerRef = useRef(null);
    const bundlesRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    useGSAP(() => {
        gsap.from(".ourgiftwishlist-main-cont > *", {
            y: 40,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6,
            ease: "power2.out"
        });

    });


    return (
        <>
            <div className="ourgiftwishlist-wrapper-cont">
                <div className="ourgiftwishlist-main-cont">
                    <div className="image-cont">
                        <img src={MotherSon} alt="Mother son" />
                    </div>
                    <div className="instruction-cont">
                        <h3>Click on the category below to scroll to the section you'd like to support with your donation.</h3>
                    </div>
                    <div className="redirect-link">
                        <button className='redirect-link-btn' onClick={() => scrollToSection(babieRef)}>
                            For Babie
                        </button>
                        <button className='redirect-link-btn' onClick={() => scrollToSection(motherRef)}>
                            For Mother
                        </button>
                        <button className='redirect-link-btn' onClick={() => scrollToSection(girlRef)}>
                            Go to Girl
                        </button>
                        <button className='redirect-link-btn' onClick={() => scrollToSection(boyRef)}>
                            Go to Boy
                        </button>
                        <button className='redirect-link-btn' onClick={() => scrollToSection(parentRef)}>
                            Go to Parent
                        </button>
                        <button className='redirect-link-btn' onClick={() => scrollToSection(elderlyRef)}>
                            Go to Elderly
                        </button>
                        <button className='redirect-link-btn' onClick={() => scrollToSection(bookRef)}>
                            Go to Book
                        </button>
                        <button className='redirect-link-btn' onClick={() => scrollToSection(incomeRef)}>
                            Go to Income
                        </button>
                        <button className='redirect-link-btn' onClick={() => scrollToSection(collageRef)}>
                            Go to Collage
                        </button>
                        <button className='redirect-link-btn' onClick={() => scrollToSection(healthRef)}>
                            Go to Health
                        </button>
                        <button className='redirect-link-btn' onClick={() => scrollToSection(childrenRef)}>
                            Go to children
                        </button>
                        <button className='redirect-link-btn' onClick={() => scrollToSection(waterenergyRef)}>
                            Go to Water&Energy
                        </button>
                        <button className='redirect-link-btn' onClick={() => scrollToSection(hungerRef)}>
                            Go to Hunger
                        </button>
                        <button className='redirect-link-btn' onClick={() => scrollToSection(bundlesRef)}>
                            Go to Bundles
                        </button>
                    </div>
                    <div className="non-profit-making-gift">
                        <h2>Non-Profit-Making Gift</h2>
                        <p>Your Gift Provides Hope</p>
                    </div>
                    <div ref={babieRef}>
                        <Babies />
                    </div>
                    <div ref={motherRef}>
                        <Mother />
                    </div>

                    <div ref={girlRef}>
                        <Girls />
                    </div>

                    <div ref={boyRef}>
                        <Boys />
                    </div>

                    <div ref={parentRef}>
                        <Parent />
                    </div>

                    <div ref={elderlyRef}>
                        <Elderly />
                    </div>

                    <div ref={bookRef}>
                        <Book />
                    </div>

                    <div ref={incomeRef}>
                        <Income />
                    </div>

                    <div ref={collageRef}>
                        <Collage />
                    </div>

                    <div ref={healthRef}>
                        <Health />
                    </div>

                    <div ref={childrenRef}>
                        <Children />
                    </div>

                    <div ref={waterenergyRef}>
                        <WaterEnergy />
                    </div>

                    <div ref={hungerRef}>
                        <Hunger />
                    </div>

                    <div ref={bundlesRef}>
                        <Bundles />
                    </div>












                </div>
            </div>
        </>
    )
}

export default Ourgiftwishlist