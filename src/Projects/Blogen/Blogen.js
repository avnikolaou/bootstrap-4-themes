import React, { Component } from 'react'
import { BrowserRouter, Route} from "react-router-dom";

import Nav from "./Nav"
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Posts from "./Posts";
import Categories from "./Categories";
import Users from "./Users";
import Profile from "./Profile";
import Settings from "./Settings";
import Login from "./Login";
import Details from "./Details";



class Blogen extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav/>
                <Route exact path = "/Blogen" component={Dashboard}/>
                <Route exact path = "/Blogen/posts" component={Posts}/>
                <Route exact path = "/Blogen/categories" component={Categories}/>
                <Route exact path = "/Blogen/users" component={Users}/>
                <Route exact path = "/Blogen/profile" component={Profile}/>
                <Route exact path = "/Blogen/settings" component={Settings}/>
                <Route exact path = "/Blogen/login" component={Login}/>
                <Route exact path = "/Blogen/details" component={Details}/>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default Blogen
