import React, { Component } from 'react'
import { BrowserRouter, Route} from "react-router-dom";

import Nav from "./Nav"
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Posts from "./Posts";



class Blogen extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav/>
                <Route exact path = "/Blogen" component={Dashboard}/>
                <Route exact path = "/Blogen/posts" component={Posts}/>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default Blogen
