import Cook from '../images/frp-cook.png';
import Grower from '../images/frp-planting.png';
import { Link } from 'react-router-dom';

const Join = () => {
    return (
        <div id="join-flex">
            <div className="join-text">
                <div>
            <h1>HELP GIVE FOOD BACK.</h1>
            <p>The Food Reuse Project helps connect the gap between 
            local community garderns with community kitchens to help reduce food waste.</p>
            </div>
            <Link to="/login" style={{textDecoration: "none", color: "black"}}>JOIN NOW</Link>
            </div>
            <div className="join-img">
                <div></div>
            </div>
        </div>
    )
}
export default Join;