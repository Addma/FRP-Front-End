import Garden from '../images/community-garden.jpg';
import Kitchen from '../images/community-kitchen.jpg';
import Community from '../images/community-help.jpg';


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
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div style={{width: "100px", height: "1px", backgroundColor: "black"}}>
                        </div>
                        <div style={{borderRight: "3px solid black", borderBottom: "3px solid black", width: "10px", height: "10px", transform: "rotate(-45deg)"}}>
                        </div>
                        </div>
                </div>
                <div className="whohelp-info">
                    <img src={Kitchen} alt=""/>
                    <h3>Community Kitchens</h3>
                    <ul>
                    <li>We help organizations such as schools, community gardens and
                        farms that want to donate excess harvests.
                    </li>
                    </ul>
                </div>
                <div className="whohelp-info">
                    <img src={Community} alt=""/>
                    <h3>Local Commmunity</h3>
                    <ul>
                    <li>We help organizations such as schools, community gardens and
                        farms that want to donate excess harvests.
                    </li>
                    </ul>
                </div>  
            </div>
        </div>
    )
}
export default Help;