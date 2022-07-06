import Garden from '../images/community-garden.jpg';
import Kitchen from '../images/community-kitchen.jpg';
import Community from '../images/community-help.jpg';
import { Link } from 'react-router-dom';

const Help = () => {

    return (
        <div id="whohelp-wrapper">
            <h1>Who we help</h1>
            <div id="whohelp-grid">
                <div className="whohelp-info">
                    <img src={Garden} alt=""/>
                    <h3>Community Gardens</h3>
                    <ul>
                    <li>We help organizations such as schools, community gardens and
                        farms that want to donate excess harvests.
                    </li>
                    </ul>
                    <Link to="/works" style={{alignSelf: "flex-end  "}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div style={{width: "20px", height: "3px", backgroundColor: "green", marginRight: "-14px"}}>
                        </div>
                        <div style={{borderRight: "3px solid green", borderBottom: "3px solid green", width: "15px", height: "15px", transform: "rotate(-45deg)"}}>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="whohelp-info">
                    <img src={Kitchen} alt=""/>
                    <h3>Community Kitchens</h3>
                    <ul>
                    <li>We help organizations such as schools, community gardens and
                        farms that want to donate excess harvests.
                    </li>
                    </ul>
                    <Link to="/works" style={{alignSelf: "flex-end"}}>
                    <div style={{display: "flex", alignItems: "center", marginRight: "1rem"}}>
                        <div style={{width: "20px", height: "3px", backgroundColor: "green", marginRight: "-14px"}}>
                        </div>
                        <div style={{borderRight: "3px solid green", borderBottom: "3px solid green", width: "15px", height: "15px", transform: "rotate(-45deg)"}}>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="whohelp-info">
                    <img src={Community} alt=""/>
                    <h3>Local Commmunity</h3>
                    <ul>
                    <li>We help organizations such as schools, community gardens and
                        farms that want to donate excess harvests.
                    </li>
                    </ul>
                    <Link to="/works" style={{alignSelf: "flex-end"}}>
                    <div style={{display: "flex", alignItems: "center", alignSelf: "flex-end", marginRight: "1rem"}}>
                        <div style={{width: "20px", height: "3px", backgroundColor: "green", marginRight: "-14px"}}>
                        </div>
                        <div style={{borderRight: "3px solid green", borderBottom: "3px solid green", width: "15px", height: "15px", transform: "rotate(-45deg)"}}>
                        </div>
                    </div>
                    </Link>
                </div>  
            </div>
        </div>
    )
}
export default Help;