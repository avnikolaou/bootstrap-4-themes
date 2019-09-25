import React, { Component } from 'react'
import Nav from "./Nav";
import Showcase from "./Showcase";
import Newsletter from "./Newsletter";
import Boxes from "./Boxes";
import About from "./About";

class Mizuxe extends Component{

    render() {
        return (
            <div className={"main-section"}>
                <Nav/>
                <Showcase/>
                <Newsletter/>
                <Boxes/>
                <About/>
            </div>

        )
    }
}

export default Mizuxe;
