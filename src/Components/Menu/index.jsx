import React from "react";
import './style.css'
import { Images } from "../Json/json";


const  Menu=()=>{
    return(
        <div className="image">
{Images.map((imag,id) =>(
    <div className="container" key={id}>
        <img  src={imag.imgs} alt="product"></img>
        <div  className="">
         <h1>{imag.title}</h1>
         <p>{imag.ratings}</p>
         <p>{imag.price}</p>
         <button>{imag.button}</button>
         <p>{imag.tag}</p>
        </div>
        </div>
        ))}
        </div>
    )
}
export default Menu