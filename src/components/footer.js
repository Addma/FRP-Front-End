import FRP from '../images/frp.png';


const Footer = () => {
    return (
        <div id="footer">
            <div id="footer-flex">
            <div>
            <img src={FRP} alt="frp logo"/>
            <p>Food Reuse Project</p>
            </div>
            <div className='links-wrapper'>
                <div>
                    <ul>
                        <li>About Us</li>
                        <li>Our Works</li>
                        <li>Contact Us</li>
                        <li>Map</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Terms of Service</li>
                        <li>FRP Partners</li>
                        <li>FRP Tutorial</li>
                    </ul>
                </div>
            </div>
            </div>
            <p style={{textAlign: "center"}}>Made with &lt; 3 by Team Reusers</p>
        </div>
    )
}
export default Footer;