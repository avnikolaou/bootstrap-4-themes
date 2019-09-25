import React, { Component } from 'react'
import Nav from "./Nav";
import Showcase from "./Showcase";

class Mizuxe extends Component{

    render() {
        return (
            <div className={"main-section"}>
                <Nav/>
                <Showcase/>
            </div>

        )
    }
}

export default Mizuxe;
