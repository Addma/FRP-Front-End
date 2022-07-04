import Nav from '../components/nav';
import Footer from '../components/footer'
import {useEffect, useState} from 'react'
const Map = () => {
    const [closeOrgs, setCloseOrgs] = useState([])
    useEffect(() => {

    }, [])
return (
<div>
    <Nav/>
    <div id="map-container">
        <div id="map-wrapper">
            <div className='map-sidebar'>

            </div>
            <div className='map'></div>
        </div>
    </div>
<Footer/>
</div>
)
}
export default Map;
