import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-about">
        <h3>About Us</h3>
        <p>We are a company dedicated to providing top-quality products and services to our customers. Our mission is to...</p>
      </div>
      <div className="footer-get-in-touch">
        <h3>Get in Touch</h3>
        <ul>
          <li><FontAwesomeIcon icon={faEnvelope} /> rahulkundan60@gmail.com</li>
          <li><FontAwesomeIcon icon={faFacebook} /> Facebook</li>
          <li><FontAwesomeIcon icon={faTwitter} /> Twitter</li>
          <li><FontAwesomeIcon icon={faInstagram} /> Instagram</li>
        </ul>
      </div>
      <div className="footer-newsletter">
        <h3>Newsletter</h3>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
