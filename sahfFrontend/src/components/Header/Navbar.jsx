// import "./Navbar.css";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           SAHF
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarScroll"
//           aria-controls="navbarScroll"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarScroll">
//           <ul
//             className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
//             style={{ "--bs-scroll-height": "100px" }}
//           >
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/Education">
//                 Education
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/Healthcare">
//                 Healthcare
//               </Link>
//             </li>
//             {/* Ways to donate */}
//             <li className="nav-item dropdown">
//               <Link
//                 className="nav-link dropdown-toggle"
//                 to="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Way To Donate
//               </Link>
//               <ul className="dropdown-menu">
//                 <li>
//                   <Link className="dropdown-item" to="/Donate_To_A_Cause">
//                     Donate to a Cause
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/Our_Gift_Wishlist">
//                     Our Gift Wishlist
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/Donate_for_Development">
//                     Donate for Development
//                   </Link>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/Other_Ways_to_Give">
//                     Other Ways to Give
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//             {/* Get_Involved Section */}
//             <li className="nav-item dropdown">
//               <Link
//                 className="nav-link dropdown-toggle"
//                 to="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Get Involved
//               </Link>
//               <ul className="dropdown-menu">
//                 <li>
//                   <Link className="dropdown-item" to="/Ways_to_get_involved">
//                     Ways to get Involved
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/Join_us">
//                     Join Us/Volunteer
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/Donate">
//                     Donate
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/Partner_with_us">
//                     Partner_with_us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/Sponsorship">
//                     Sponsorship
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//           </ul>

//           <form className="d-flex align-items-center" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//               style={{ height: "38px" }} // or 36px
//             />
//             <button
//               className="btn btn-outline-success"
//               type="submit"
//               style={{ height: "38px", lineHeight: "1.5" }}
//             >
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../assets/Body/logo.png";
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {


  const [scrollUp, setScrollUp] = useState(false);
  const [initialScrollY, setInitialScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > initialScrollY) {
        setScrollUp(true);
        console.log("scrolling up")
      } else {
        setScrollUp(false);
        console.log("scrolling down")
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
      <nav class={`navbar navbar-expand-lg ${scrollUp ? 'on-scrolling-custom-nav-style' : 'custom-nav-style'}`}>
        <div class="container-fluid ">

          <div className="logo-compName">
            <Link className="logo" to='/home'>
              <img src={Logo} alt="Company-logo" />
            </Link>
          </div>

          <Link class={`navbar-brand ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'}`} to='/home'>SAHF</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">

              <li class="nav-item">
                <Link class={`nav-link active ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'}`} aria-current="page" to='/'>Home</Link>
              </li>

              <li class="nav-item dropdown">
                <Link class={`nav-link dropdown-toggle ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'}`} 
                to="/Education"
                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  EDUCATION
                </Link>
                <ul class="dropdown-menu">

                  <li class="nav-item dropend">
                    <Link class="nav-link dropdown-toggle custom-link-style"
                    href="#" 
                    role="button"
                     data-bs-toggle="dropdown" 
                     aria-expanded="false">
                      SPONSOR A CHILD
                    </Link>
                    <ul class="dropdown-menu">
                      <li><Link class="dropdown-item" to='/education/new-enrolment'>View All Children</Link></li>
                      <li><Link class="dropdown-item" to='/education/dream-of-life'>Your SponsorShip..</Link></li>
                      <li><Link class="dropdown-item" to='/education/new-enrolment'>What is child sponsorship</Link></li>
                      <li><Link class="dropdown-item" to='/education/new-enrolment'>Why Sponsor a Child?</Link></li>
                      <li><Link class="dropdown-item" to='/education/new-enrolment'>How to sponsor a child</Link></li>
                    </ul>
                  </li>

                  <li><Link class="dropdown-item" to='/Education/New_Enrollment'>
                  New Enrolment</Link></li>
                  <li><Link class="dropdown-item" to='/education/dream-of-life'>Dream of life</Link></li>

                  <li class="nav-item dropend">
                    <Link class={`nav-link dropdown-toggle ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Where We Work
                    </Link>
                    <ul class="dropdown-menu">
                      <li><Link class="dropdown-item" to='/education/new-enrolment'>Uttar Pradesh</Link></li>
                    </ul>
                  </li>

                  <li><Link class="dropdown-item" to='/education/new-enrolment'>Add a Child</Link></li>

                </ul>
              </li>

              <li class="nav-item">
                <Link class={`nav-link ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'}`} to='/Healthcare/Health_Care'>HEALTHCARE</Link>
              </li>

              <li class="nav-item dropdown">
                <Link class={`nav-link dropdown-toggle ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  WAY TO DONATE
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to='/Ways_to_donate/Donate_to_Cause'>Donate to Cause</Link></li>
                  <li><Link class="dropdown-item" to='/way-to-donate/our-gift-wishlist'>Our Gift Wishlist</Link></li>
                  <li><Link class="dropdown-item" to='/way-to-donate/donate-to-cause'>Donate for Development</Link></li>
                  <li><Link class="dropdown-item" to='/way-to-donate/donate-to-cause'>Other Ways to Donate</Link></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <Link class={`nav-link dropdown-toggle ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  GET INVOLVED
                </Link>
                <ul class="dropdown-menu">

                  <li class="nav-item dropend">
                    <Link class={`nav-link dropdown-toggle ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      FOR SPONSORS
                    </Link>
                    <ul class="dropdown-menu">
                      <li><Link class="dropdown-item" to='/education/new-enrolment'>Write Your Child</Link></li>
                      <li><Link class="dropdown-item" to='/education/new-enrolment'>Give to Your Child</Link></li>
                      <li><Link class="dropdown-item" to='/education/new-enrolment'>Trip & Visit</Link></li>
                      <li><Link class="dropdown-item" to='/education/new-enrolment'>Crisis Updates & Alert</Link></li>
                    </ul>
                  </li>

                  <li class="nav-item dropend">
                    <Link class="nav-link dropdown-toggle custom-link-style" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      CAREER
                    </Link>
                    <ul class="dropdown-menu">
                      <li><Link class="dropdown-item" to='/get-involved/career/new-admission'>New Admission</Link></li>
                      <li><Link class="dropdown-item" to='/get-involved/career/internship'>Intership</Link></li>
                      <li><Link class="dropdown-item" to='/get-involved/career/feedback'>Feedback</Link></li>
                    </ul>
                  </li>

                  <li><Link class="dropdown-item" to="/Ways_to_get_involved">Way to Get Involved</Link></li>
                  <li><Link class="dropdown-item" to="/Join_us">Join Us / Volunteer</Link></li>
                  <li><Link class="dropdown-item" to="/Donate">Donate</Link></li>
                  <li><Link class="dropdown-item" to="/Partner_with_us">Partner With Us</Link></li>
                  <li><Link class="dropdown-item" to="/Sponsorship">Sponsorship</Link></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <Link class={`nav-link dropdown-toggle ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  EVENT & STORIES
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" href="#">General Awareness</Link></li>
                  <li><Link class="dropdown-item" to='/Event_and_stories/Gallery_section'>Gallery</Link></li>
                  <li><Link class="dropdown-item" href="#">Upcoming Events</Link></li>
                  <li><Link class="dropdown-item" href="#">Past Events</Link></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <Link class={`nav-link dropdown-toggle ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ABOUT US
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to='/About_us/Who_we_are'>Who We Are</Link></li>
                  <li><Link class="dropdown-item" to='/About_us/FAQs'>FAQS</Link></li>
                  <li><Link class="dropdown-item" to='/About_us/Laws_&_policy'>Law & Policy</Link></li>
                  <li><Link class="dropdown-item" to='/About_us/Accountability_Report'>Accountability Report</Link></li>
                  <li><Link class="dropdown-item" to='/About_us/Contact_us'>Contact Us</Link></li>
                </ul>
              </li>

              <li class="nav-item">
                <Link class={`nav-link ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'}`} to='/Donate'>DONATE</Link>
              </li>

              <li class="nav-item">
                <Link class={`nav-link ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'}`} to='/Notice'>NOTICE</Link>
              </li>

              <li class="nav-item dropdown">
                <Link class={`nav-link dropdown-toggle ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  MORE
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to='/More/Unfortunate_life'>UNFORTUNATE LIFE</Link></li>
                  <li><Link class="dropdown-item" to='/About_us/Contact_us'>Contack Us</Link></li>
                </ul>
              </li>

              <li class="nav-item">
                <Link class={`nav-link ${scrollUp ? 'on-scroll-nav-link ' : 'custom-link-style'}`} href="#"><BsSearch /> </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar