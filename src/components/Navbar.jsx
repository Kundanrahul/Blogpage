import React from "react";
import "./Navbar.css";
import logo from '../constants/logoblog.jpg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="imgcont">
       <img src={logo} alt="Logo" className="navbar-logo" />
       </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href={"/profile"} className="nav-link">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
