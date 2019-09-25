import React, { Component } from 'react'
import Nav from "./Nav";
import Showcase from "./Showcase";
import Newsletter from "./Newsletter";
import Boxes from "./Boxes";
import About from "./About";
import Authors from "./Authors";
import Contact from "./Contact";

class Mizuxe extends Component{

    render() {
        return (
            <div className={"main-section"}>
                <Nav/>
                <Showcase/>
                <Newsletter/>
                <Boxes/>
                <About/>
                <Authors/>
                <Contact/>
            </div>

        )
    }
}

export default Mizuxe;
