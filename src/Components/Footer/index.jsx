import React from "react";
import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/fontawesome-free-brands';
import { faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faFacebook } from '@fortawesome/fontawesome-free-brands';
import { faPinterest} from '@fortawesome/fontawesome-free-brands';






const Footer = () =>{
    return(
        <div>
        <footer className="footer">
<div className="footers">
   <h3>Fooodish</h3> 
    <p>Continue Fooodish 2023 all rights reserved </p>
<h3>Follow us On</h3>
<span ><FontAwesomeIcon icon={faPinterest} className="icons"/></span>
<span  ><FontAwesomeIcon icon={faInstagram} className="icons"/> </span>
<span ><FontAwesomeIcon icon={faTwitter}  className="icons"/> </span>
<span  ><FontAwesomeIcon icon={faFacebook} className="icons" /></span>
</div>

<div className="footers">
    <h3>Menu</h3>
    <ul>
        <li>Home</li>
        <li>Offers</li>
        <li>Service</li>
        <li>About Us</li>
    </ul>
    </div>
    <div className="footers">
    <h3>Information</h3>
    <ul>
        <li>Menu</li>
        <li>Quality</li>
        <li>Make a choice</li>
        <li>Salad with Vegetable</li>
        <li>Fast Delivery</li>
        <li>Subscribe</li>
    </ul>
    </div>
    <div className="footers">
    <h3>Contact</h3>
    <ul>
        <li>+123456789</li>
        <li>Explore</li>
        <li>info@foodish.com</li>
        <li>1245,NewYork,USA</li>
    </ul>
    </div>
    </footer>    
    </div>
    );
}

export default Footer;