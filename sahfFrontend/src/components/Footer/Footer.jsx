import { useState } from 'react'

import styles from './Footer.module.css';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {


    return (
        <>
            <div className={styles.footer_wrapper}>
               <div className={styles.footer_main_container}>
                <div className={styles.left_details}>
                    <h4 className={styles.left_heading}>Quick Link</h4>
                    <a className={styles.sky_link} href="">Donate Now</a><br />
                    <a className={styles.sky_link} href="">Unfortunate Life</a>
                    <div><a className={styles.sky_link} href="">Life of a Commoner</a> <span>by SAHF</span> </div>
                    <a className={styles.sky_link} href="">Privacy Policy</a><br />
                    <a className={styles.sky_link} href="">Terms & Conditions</a>
                    <div className={styles.social_media_handle}>
                        <a href="">
                            <FaSquareInstagram className={styles.instagram} />
                        </a>
                        <a href="">
                           <FaLinkedin className={styles.linkedin}/>
                        </a>
                        <a href="">
                           <FaFacebook className={styles.facebook}/>
                        </a>
                        <a href="">
                           <FaYoutube className={styles.youtube}/> 
                        </a>
                        <a href="">
                           <IoLogoWhatsapp className={styles.whatsapp}/>
                        </a>
                    </div>
                </div>
                <div className={styles.right_details}>
                          <h4 className={styles.right_heading}>GET IN TOUCH</h4>
                          <p> <span className={styles.sky_link}>ADDRESS: </span>Safezone Active Humanity Foundation,<br />
                            Bairiya,Ballia(UP),277201</p>
                          <p> <span className={styles.sky_link}>WhatsApp: </span>7705085933</p>
                          <p>Contactus: <a  className={styles.email}href="">sahfofficial@gmail.com</a> </p>
                          <div className={styles.copy_right}>
                            <p>Copyright &copy;2025 SAHF  All Right Reserved</p>
                            <a href="">Admin login</a> 
                          </div>
                </div>
               </div>
            </div>
        </>
    )
}

export default Footer


