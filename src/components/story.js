import { useEffect, useState } from "react";
import Illustration from '../images/apple-picker.png'

const Story = () => {
    const [size, setSize] = useState({});
    useEffect(() => {
    }, [])
    return (
        <div id="story">
            <div className="story-wrapper">
                <div>
                <h1 style={{fontSize: "5vw"}}>Our Story.</h1> 
                <h2>FRP was created during the York University C4 sprint in 
                        Summer 2022, to solve social problems while addressing 
                        the first Sustainable Development goal created by the 
                        United Nation General Assembly
                </h2>
                <h2>As part of C4, the Reuse group was assembled with students from diverse fields and backgrounds.</h2>
                </div>
            </div>
        </div>
    )
}
export default Story;