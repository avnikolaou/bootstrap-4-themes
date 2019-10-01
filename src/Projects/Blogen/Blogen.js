import React, { Component } from 'react'
import { BrowserRouter, Route} from "react-router-dom";

import Nav from "./Nav"
import Footer from "./Footer";
import Dashboard from "./Dashboard";



class Blogen extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav/>
                <Route exact path = "/Blogen" component={Dashboard}/>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default Blogen
