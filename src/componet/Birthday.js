import React from "react";
import Navbar from "./resource/Navbar";

import Card from "./resource/Card";
// import Effect from "./resource/effect";
const Birthday=()=>{
    return(
<div className="warpper">
<Navbar />

<div className="row topper">
<div className="col-lg-6 col-xs-12 col-sm-12 title">
<div className="container">
{/* <h2 className="hed">

<sup><sup>
<i className="fas fa-quote-left"></i>
</sup></sup>if 
 there is an expectation behind the care it cause a lot of trouble, when there is no exception, the heart is relaxed. 
<sub> <sub> <i className="fas fa-quote-right"></i>
</sub></sub>

 
</h2> */}
<img src="https://i.123g.us/c/birth_friends/card/340068.gif" alt="the image is not found" />
</div>

</div>

<div className="col-lg-6 col-xs-12 col-sm-12 title">
<div className="container">
<Card />
</div>
</div>

</div>


</div>
    )
}
export default Birthday;



// If there is an expectation behind the care, It causes a lot of trouble, When there is no exception, The heart gets rest.
