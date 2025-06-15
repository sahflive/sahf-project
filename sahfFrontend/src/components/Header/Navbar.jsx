import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">SAHF</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul 
      class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" 
      style={{ "--bs-scroll-height": "100px" }}
      >
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Education">Education</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Healthcare">Healthcare</Link>
        </li>
        {/* Ways to donate */}
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Way To Donate
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/Donate_To_A_Cause">Donate to a Cause</Link></li>
            <li><Link class="dropdown-item" to="/Our_Gift_Wishlist">Our Gift Wishlist</Link></li>
            <li><Link class="dropdown-item" to="/Donate_for_Development">Donate for Development</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/Other_Ways_to_Give">Other Ways to Give</Link></li>
          </ul>
        </li>
        {/* Get_Involved Section */}
           <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Get Involved
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/Ways_to_get_involved">Ways to get Involved</Link></li>
            <li><Link class="dropdown-item" to="/Join_us">Join Us/Volunteer</Link></li>
            <li><Link class="dropdown-item" to="/Donate">Donate</Link></li>
            <li><Link class="dropdown-item" to="/Partner_with_us">Partner_with_us</Link></li>
            <li><Link class="dropdown-item" to="/Sponsorship">Sponsorship</Link></li>
          </ul>
        </li>

      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar