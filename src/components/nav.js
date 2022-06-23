import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../features/userSlice";
import FRP from '../images/frp.png'
import Language from './language'
export default function Nav({bg}){
    const user = useSelector((state) => getUser(state))
    console.log(user);
    return (
            <div className="nav-wrapper" style={bg}>
                <div id="navbar">
                <div id="logo">
                <a href="/"><img id="frp" src={FRP} alt="FRP"/></a>
                </div>
                <nav>
                <Link to="/about">About</Link>
                <Link to="/works">Works</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/map">Map</Link>
                {user ? <Link to="/profile">{user.organization}</Link> : <Link to="/login">Login</Link>}
                <Language/>
                </nav>
                </div>
            </div>
    )
}