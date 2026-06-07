import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from "../.././assets/logo.png";
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {


  const [scrollUp, setScrollUp] = useState(false);
  const [initialScrollY, setInitialScrollY] = useState(0);
  const [isOpen, setOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > initialScrollY) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    }

    setInitialScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [initialScrollY])




  return (
    <>
      <nav className={`navbar navbar-expand-lg ${scrollUp ? 'on-scrolling-custom-nav-style' : 'custom-nav-style'} ${isOpen ? 'onclick-change-background' : ''}`}>
        <div className="container-fluid ">

          <div className="logo-compName">
            <Link className="logo" to='/'>
              <img src={Logo} alt="Company-logo" />
            </Link>
          </div>

          <Link className={`navbar-brand ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'} ${isOpen ? 'onclick-change-text-color' : ''}`} to='/'>SAHF</Link>
          <button className="navbar-toggler custom-menu-border" onClick={() => setOpen(!isOpen)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            {isOpen ? <RiCloseLargeFill /> : <span className="navbar-toggler-icon"></span>}
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link className={`nav-link active ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'} ${isOpen ? 'onclick-change-text-color' : ''}`} aria-current="page" to='/'>Home</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className={`nav-link dropdown-toggle ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'} ${isOpen ? 'onclick-change-text-color' : ''}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  EDUCATION
                </Link>
                <ul className="dropdown-menu">

                  <li className="nav-item dropend">
                    <Link className="nav-link dropdown-toggle custom-link-style" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      SPONSOR A CHILD
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to='/education/new-enrolment'>View All Children</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to='/education/dream-of-life'>Your SponsorShip..</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to='/education/new-enrolment'>What is child sponsorship</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to='/education/new-enrolment'>Why Sponsor a Child?</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to='/education/new-enrolment'>How to sponsor a child</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link className="dropdown-item" to='/education/new-enrollment'>New Enrolment</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='/education/dream-of-life'>Dream of life</Link>
                  </li>

                  <li className="nav-item dropend">
                    <Link className={`nav-link dropdown-toggle ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Where We Work
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to='/education/new-enrolment'>Utter Pradesh</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link className="dropdown-item" to='/education/add-child'>Add a Child</Link>
                  </li>

                </ul>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'} ${isOpen ? 'onclick-change-text-color' : ''}`} to='/health-care'>HEALTHCARE</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className={`nav-link dropdown-toggle ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'} ${isOpen ? 'onclick-change-text-color' : ''}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  WAY TO DONATE
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to='/way-to-donate/donate-to-a-cause'>Donate to Cause</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='/way-to-donate/our-gift-wishlist'>Our Gift Wishlist</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='/way-to-donate/donate-for-development'>Donate for Development</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='/way-to-donate/other-way-to-give'>Other Ways to Give</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className={`nav-link dropdown-toggle ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'} ${isOpen ? 'onclick-change-text-color' : ''}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  GET INVOLVED
                </Link>
                <ul className="dropdown-menu">

                  <li className="nav-item dropend">
                    <Link className={`nav-link dropdown-toggle ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      FOR SPONSORS
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to='/get-involved/for-sponsor/write-your-child'>Write Your Child</Link></li>
                      <li><Link className="dropdown-item" to='/get-involved/for-sponsor/give-to-your-child'>Give to Your Child</Link></li>
                      <li><Link className="dropdown-item" to='/get-involved/for-sponsor/trip-and-visit'>Trip & Visit</Link></li>
                      <li><Link className="dropdown-item" to='/get-involved/for-sponsor/crisis-update-and-delete'>Crisis Updates & Alert</Link></li>
                    </ul>
                  </li>

                  <li className="nav-item dropend">
                    <Link className="nav-link dropdown-toggle custom-link-style" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      CAREER
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to='/get-involved/career/new-admission'>New Admission</Link></li>
                      <li><Link className="dropdown-item" to='/get-involved/career/internship'>Intership</Link></li>
                      <li><Link className="dropdown-item" to='/get-involved/career/feedback'>Feedback</Link></li>
                    </ul>
                  </li>

                  <li><Link className="dropdown-item" to='/get-involved/way-to-get-involved'>Way to Get Involved</Link></li>
                  <li><Link className="dropdown-item" to='/get-involved/join-us-volunteer'>Join Us / Volunteer</Link></li>
                  <li><Link className="dropdown-item" to='/donate'>Donate</Link></li>
                  <li><Link className="dropdown-item" to='/get-involved/partner-with-us'>Partner With Us</Link></li>
                  <li><Link className="dropdown-item" to='/get-involved/sponsorship'>Sponsorship</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className={`nav-link dropdown-toggle ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'} ${isOpen ? 'onclick-change-text-color' : ''}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  EVENT & STORIES
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to='/event-and-stories/general-awareness'>General Awareness</Link></li>
                  <li><Link className="dropdown-item" to='/event-and-stories/gallery'>Gallery</Link></li>
                  <li><Link className="dropdown-item" to='/event-and-stories/upcoming-events'>Upcoming Events</Link></li>
                  <li><Link className="dropdown-item" to='/event-and-stories/past-events'>Past Events</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className={`nav-link dropdown-toggle ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'} ${isOpen ? 'onclick-change-text-color' : ''}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ABOUT US
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to='/about-us/who-we-are'>Who We Are</Link></li>
                  <li><Link className="dropdown-item" to='/about-us/faqs'>FAQS</Link></li>
                  <li><Link className="dropdown-item" to='/about-us/law-and-policy'>Law & Policy</Link></li>
                  <li><Link className="dropdown-item" to='/about-us/accountability-report'>Accountability Report</Link></li>
                  <li><Link className="dropdown-item" to='/about-us/contact-us'>Contact Us</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'} ${isOpen ? 'onclick-change-text-color' : ''}`} to='/donate'>DONATE</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'} ${isOpen ? 'onclick-change-text-color' : ''}`} to='/notice'>NOTICE</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className={`nav-link dropdown-toggle ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'} ${isOpen ? 'onclick-change-text-color' : ''}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  MORE
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to='/'>UNFORTUNATE LIFE</Link></li>
                  <li><Link className="dropdown-item" to='/contact-us'>Contack Us</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'} ${isOpen ? 'onclick-change-text-color' : ''}`} href="#"><BsSearch /> </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar