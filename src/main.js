import React from "react";
import Nav from'./components/nav';
import About from './landing/about';
import Help from './landing/whohelp';
import How from './landing/howworks';
import Involved from './landing/difference';
import Who from './landing/who';
import Story from './landing/story';
import Contact from './components/contact';
import Difference from './landing/difference';
import Join from "./landing/join";
import Footer from "./components/footer";
const Main = () => {
    return (
        <div id="landing">
            <Nav />
            <Join />
            <How />
            <Difference/>
            <Help />
            <Footer/>
        </div>

    )
}
export default Main;