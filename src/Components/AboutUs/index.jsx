import React from "react";
import './style.css'
import Burgers from '../Images/burgers.jpeg';
import MeetbBalls from '../Images/meetballs.png';
import Waffle from '../Images/waffle.png';





const AboutUs=()=>{
    return(
<div className="images">
<div className="firstimg">
<img src={Burgers}alt="" className="first"/>
</div>
<div  className="secondimg">
<img src={Waffle} alt="" className="imgss" />
<img src={MeetbBalls} alt="" className="imgss" />
</div>







        </div>
    )
}
export default AboutUs