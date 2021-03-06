import React from "react";
import gardens from '../images/garden.png';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Works = () => {
    const [size, setSize] = useState({})
    const circ = {width: "50px", height: "50px", borderRadius: "50%", backgroundColor:"black", margin: "auto"}
    useEffect(() => {
        setSize({width: document.querySelector('.how-img1').clientHeight})
    }, [])
return (
    <div id="work-frp">
        <h1 style={{marginBottom: "1vh"}}>
            How it works
        </h1>
        <div className="how-flex">
            <div className="how-info">
    <h2><span>The FRP projects aims to bridge the existing gap between food wastage in community gardens and food insecurity in community kitchens.
         Through local collarbartion, this project hopes feed more people in the city of Woburn.  
         </span>
         </h2>
            </div>
            <div id="how-mid">
                <div className="how-img1"><img src={gardens} alt="community garden"/></div>
                <div style={circ}></div>
                <div style={{width: "10px", height: "20vh", backgroundColor: "black", margin: "auto"}}></div>
                <div style={circ}></div>
                <div className="how-img2"><img src={gardens} alt=""/></div>
            </div>
        <div className="how-info2">
            <h1 style={{fontSize: "3vw"}}>How to use FRP?</h1>
            <h5>Individuals who own community gardens can sign up and create profile to donate extra vegitation.
                Using the map option, both parties can see which organizations need food and who is available to donate food.
                Community kitchens can sign up to find who is donating,
                what produce is available and get notified when required produce is availble to be donated.
                </h5>
                <h5>By signing up, indivduals can acess other oragnizations and community garners profile and the chat feature.  
                The FR project helps communities can gain acess to information about fresh produce donations and which organizations are inneed.
                </h5>
                <Link to="/signup">Join Now</Link>
                <div className="yellow-circ"></div>
        </div>
        </div>
    </div>
)

}
export default Works;