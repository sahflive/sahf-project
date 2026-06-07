import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import UnfortunateLife1 from '../../../assets/unfortunate_life/unfortunatelife1.jpg';
import UnfortunateLife2 from '../../../assets/unfortunate_life/unfortunateLife2.jpg';
import UnfortunateLife3 from '../../../assets/unfortunate_life/unfortunateLife3.jpg';
import './UnfortunateLife.css'
import PastUnfortunate from '../unfortunate_components/PastUnfortunate';
const UnfortunateLife = () => {

    const [location1, setLocation1] = useState(true);
    const [fade, setFade] = useState(true);
    const text = [`You Are Unique`, '& You Are Best', 'Unfortunate Life']
    const images = [
        UnfortunateLife1,
        UnfortunateLife2,
        UnfortunateLife3,

    ]
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(false);
            setLocation1(false);
            console.log("hello")
            setTimeout(() => {
                setIndex(preIndex => (preIndex + 1) % text.length);
                setLocation1(true);
                setFade(true);
            }, 600);


        }, 1500);

        return () => clearInterval(intervalId);
    }, []);



    return (
        <>
            <div className="unfortunatelife-wrapper-cont">
                <div className="unfortunatelife-main-cont">

                    <div className={`unfortunatelife-image-cont ${fade ? 'fade-in' : 'fade-out'}`}>
                        <img src={images[index]} alt="" />
                        <h2 className={`${fade ? 'fade-in' : 'fade-out'}`}>{location1 ? (text[index]) : <br />}</h2>
                        <h3 className={`${fade ? 'fade-in' : 'fade-out'}`}>{!location1 ? (text[index]) : <br />}</h3>
                    </div>

                    <div className="unfortunatelife-description-container">
                        <div className="left-address-container">
                            <PastUnfortunate />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnfortunateLife