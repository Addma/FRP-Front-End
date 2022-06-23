import React from "react";
import Nav from '../components/nav';
import BG from '../help';
import Donation from '../images/food-donation.jpg';
import Volunteer from '../images/volunteering.jpg';
const Difference = () => {

return (
    <div id="involved-frp">
        <h1 style={{marginBottom: "7.5vh"}}>
            How to make a difference
        </h1>
        <div id="diff-wrapper">
            <div>
                <img src={Donation} alt="food donation" style={{maxWidth: "100%", height: "auto"}}/>
                <h3>Food donation</h3>
            </div>
            <div>
                <ul>
                    <li><b>Food Guideline - </b> Find out the types of foods you can donate</li>
                    <li><b>Community Centre and Foodbank - </b>Connect with the community centers and
                    gardens
                    </li>
                </ul>
            </div>
            <div>
            <img src={Volunteer} alt="food donation" style={{maxWidth: "100%", height: "auto"}}/>
                <h3>Volunteering</h3>
            </div>
            <div>
                    <ul>
                    <li><b>Maps and Contacts - </b> Find the commmunity centres and gardens/foodbanks that are
                    looking for volunteers
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

}
export default Difference;