import React from "react";
import './style.css'
import Sandwich from '../Images/sandwich.jpeg';



const Home =()=>{
    return(
        <div className="homes">
<div className="text">
   <h1 className="all">All fast foods is<br></br>
     available at foodle</h1> 
     <p className="we">We Are Just A Click Away When You <br></br>
    Crave For Delicious Fast Food</p>
    <button className="buy">Buy Now</button>
    <button className="button"></button><span className="how">How To order</span>
</div>
<div className="image">
    <img src={Sandwich} alt=""  className="img"/>  </div>

        </div>
)
}
export default Home