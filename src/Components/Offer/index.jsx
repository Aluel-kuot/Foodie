import React from "react";
import './style.css'
import Burger from '../Images/burger.png';
import Chips from '../Images/chips.png';
import Pizza from '../Images/pizza.png';




const Offer =()=>{
return(
    <div className="offerss">
<div className="offers">
<div>
    <h1 className="best">Best<span className="delivery">Delivered</span><br></br>
    Categories</h1></div>
<div><p className="here">Here Are Some Of Our Best Distributed<br/>
Categories.If you want You Can Order <br/>
From Here.
</p>
</div>
</div>

<div className="offer">
    <span><img src={Burger} alt=""  className="imgs"/><br/>
    <span className="chicken">Chicken Burger</span><br/>
 <span className="order">Order Now</span><br/>
</span>
<span ><img src={Chips} alt=""  className="imgs"/><br/>
<span className="chicken">French Fries</span><br/>
 <span  className="order">Order Now</span><br/>
</span>
 <span ><img src={Pizza} alt=""  className="imgs"/><br/>
 <span className="chicken">Chicken Pizza</span><br/>
 <span  className="order" >Order Now</span>
 


</span>
</div>
    </div>
)
}
export default Offer