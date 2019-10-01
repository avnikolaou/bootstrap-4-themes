import React, { Component } from 'react'
import { BrowserRouter, Route} from "react-router-dom";

import Nav from "./Nav"
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Posts from "./Posts";
import Categories from "./Categories";
import Users from "./Users";



class Blogen extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav/>
                <Route exact path = "/Blogen" component={Dashboard}/>
                <Route exact path = "/Blogen/posts" component={Posts}/>
                <Route exact path = "/Blogen/categories" component={Categories}/>
                <Route exact path = "/Blogen/Users" component={Users}/>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default Blogen
