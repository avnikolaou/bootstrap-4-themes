import React, { Component } from 'react'
import Nav from "./Nav";
import Footer from "./Footer";
import { BrowserRouter, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Blog from "./Blog";
import Contact from "./Contact";


class Glozzom extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav/>
                <Route exact path = "/Glozzom" component={Home}/>

                <Route path = "/Glozzom/about" component={About}/>

                <Route path = "/Glozzom/services" component={Services} />

                <Route path = "/Glozzom/blog" component={Blog}/>

                <Route path = "/Glozzom/contact" component={Contact}/>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default Glozzom
