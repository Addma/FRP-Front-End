import Community from '../images/community-help.jpg'
import Kitchen from '../images/community-kitchen.jpg'
import Garden from '../images/community-garden.jpg';

const HowHelp = () => {
    return (
        <div id="howhelp-flex">
            <div>
            <img src={Community} alt="community-help"/>
                <div>
                    <h1>Community</h1>
                    <h2>We cater to the Woburn Community with hopes of helping many more communities in the future.</h2>
                    <h2>By providing a communication platform to bridge the gap between growers and kitchens,
                        we hope to feed more people and reduce food waste.
                    </h2>
                </div>
            </div>
            <div>
            <img src={Kitchen} alt="community-kitchen"/>
                <div>
                    <h1>Community Kitchen</h1>
                    <h2>We help community kitchens to acquire needed food by facilitating a communication platform between growers and kitchens</h2>
                    <h2>Kitchens will be able to request foods that they need and this will help kitchens meet demands that they need.</h2>
                </div>
            </div>
            <div>
            <img src={Garden} alt="community-garden"/> 
                <div>
                <h1>Community Gardens</h1>
                <h2>We help organizations such as schools, community gardens or farms to set up donation of excess vegetation.</h2>
                </div>
            </div>
        </div>
    )
}
export default HowHelp;