import React from "react";
import{Route } from "react-router";
import './style.css'


const NavBar=()=>{
    return(
<div className="navB">
<nav>
<a className="foodle">Foodle</a>
<a href="Home"><span className="home">Home</span></a>
<a href="Offer">Offer</a>
<a href="Service">Service</a>
<a href="Menu">Menu</a>
<a href="About Us">About Us</a>
<button className="log">Log In</button>
<button className="sign">Sign Up </button>

 </nav>
</div>
    )

}
export default NavBar