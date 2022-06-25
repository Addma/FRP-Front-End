import React from "react";
import Nav from './nav';
import BG from '../help';
import Story from "./story";
import Who from './who';
import Footer from "./footer";
import Waste from "./waste";
import Mission from "./mission";
const About = () => {

return (
    <div>
        <Nav />
        <Story/>
        <Who />
        <Waste />
        <Mission/>
        <Footer/>
    </div>
)

}
export default About;