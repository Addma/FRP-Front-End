import React from "react";
import Nav from '../components/nav';
import {useState, useEffect} from 'react';
import Footer from "../components/footer";
const Contact = () => {
    const [size, setSize] = useState({});
    useEffect(() => {
    }, [])
return (
    <div>
        <Nav />
        <div id="contact-frp">
            <h1>Contact Us</h1>
            <h2>Have questions about FRP?</h2> 
                <div className="contact-info">
                        <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.971166804041!2d-79.50405708513999!3d43.7734573526651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cd330b767bfb%3A0xdbb899cc9da76d19!2sYork%20University!5e0!3m2!1sen!2sca!4v1656261500875!5m2!1sen!2sca" style={{width:"600px" ,height:"450px" ,border:"1px solid"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div><h2>Address: 4700 Keele St, Toronto, ON  M3J 1P3</h2>
                        <h2>Email: foodreuseinfo@gmail.com</h2>
                        </div>
                </div>
                <div className="contact-grid">
                    <p><b>For general inquiries: </b> please contact us at info.frp@gmail.com</p>
                    <p>If you have any suggestions about the website, please contact us at <b>foodreuseinfo@gmail.com.</b></p>
                    <p><b>Food Assistance:</b> to find your nearest foodbank, checkout our map page to get in touch with the organization you wish</p>
                </div>
        </div>
        <Footer/>
    </div>
)

}
export default Contact;