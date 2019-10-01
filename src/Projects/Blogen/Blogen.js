import React, { Component } from 'react'
import { BrowserRouter, Route} from "react-router-dom";

import Nav from "./Nav"
import Footer from "./Footer";


class Blogen extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav/>

                <Footer/>
            </BrowserRouter>
        );
    }
}

export default Blogen
