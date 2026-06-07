import { useState } from 'react'
import './Footer.css';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {


    return (
        <>
            <div className='footer-wrapper'>
               <div className="footer-main-container">
                <div className="left-details">
                    <h4 className='left-heading'>Quick link</h4>
                    <a className='sky-link' href="">Donate Now</a><br />
                    <a className='sky-link' href="">Unfortunate Life</a>
                    <div><a className='sky-link' href="">Life of a Commoner</a> <span>by SAHF</span> </div>
                    <a className='privacy-term' href="">Privacy Policy</a><br />
                    <a className='privacy-term' href="">Terms & Conditions</a>
                    <div className="social-media-handle">
                        <a href="" title='Instagram'>
                            <FaSquareInstagram className='instagram' />
                        </a>
                        <a href=""title='Linkedin'>
                           <FaLinkedin className='linkedin'/>
                        </a>
                        <a href=""title='Facebook'>
                           <FaFacebook className='facebook'/>
                        </a>
                        <a href=""title='Youtube'>
                           <FaYoutube className='youtube'/> 
                        </a>
                        <a href=""title='Whatsapp'>
                           <IoLogoWhatsapp className='whatsapp'/>
                        </a>
                    </div>
                </div>
                <div className="right-details">
                          <h4 className='right-heading'>GET IN TOUCH</h4>
                          <p> <span className='sky-link'>ADDRESS: </span>Safezone Active Humanity Foundation,<br />
                            Bairiya,Ballia(UP),277201</p>
                          <p> <span className='sky-link'>WhatsApp: </span>7705085933</p>
                          <p>Contactus: <a href="">sahfofficial@gmail.com</a> </p>
                          <div className="copy-right">
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


