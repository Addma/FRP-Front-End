import FoodWaste from '../images/food-waste.jpg';
const Waste = () => {
    return (
        <div id="food-waste">
            <div>
            <img src={FoodWaste} alt=""/>
            </div>
            <div>
                <h1>Food Wastage in Canada</h1>
                <h2>Canadians throw away enough food that will be able to feed over <span>22 million</span> people</h2>
                <h2><span>58%</span> Food produced for Canadians is <b>Wasted</b></h2>
            </div>
        </div>
    )
}
export default Waste;