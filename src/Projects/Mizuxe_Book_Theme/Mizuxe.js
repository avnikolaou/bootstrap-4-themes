import React, { Component } from 'react'
import Nav from "./Nav";
import Showcase from "./Showcase";
import Newsletter from "./Newsletter";
import Boxes from "./Boxes";

class Mizuxe extends Component{

    render() {
        return (
            <div className={"main-section"}>
                <Nav/>
                <Showcase/>
                <Newsletter/>
                <Boxes/>
            </div>

        )
    }
}

export default Mizuxe;
