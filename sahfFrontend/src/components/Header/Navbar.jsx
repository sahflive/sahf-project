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
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="#">Action</Link></li>
            <li><Link class="dropdown-item" to="#">Another action</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link disabled" aria-disabled="true">Link</Link>
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