import React from 'react';
import { NavLink } from 'react-router-dom';
import './Pagenotfound.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Pagenotfound = () => {
  useGSAP(() => {
    gsap.from(".error-page-container > *", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out"
    });

    gsap.to(".error-page-container h2", {
      letterSpacing: "20px",
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  });

  return (
    <section className="error-section-wrapper">
      <div className="error-page-container">
        <h2>404</h2>
        <h4>Page Not Found</h4>
        <p>Oops! It seems like the page you're trying to access doesn't exist.
          If you believe there's an issue, feel free to report it, and we'll look into it.</p>
        <div className="btns">
          <NavLink to="/"><button className="primary-btn">Return Home</button></NavLink>
          <NavLink to="/contact"><button className="secondary-btn">Report Problem</button></NavLink>
        </div>
      </div>
    </section>
  );
};

export default Pagenotfound;
