import React, { Component } from 'react';
import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


class Looplab extends Component{

    componentDidMount() {
        // document.body.setAttribute("data-spy", "scroll");
        // document.body.setAttribute("data-target", "#main-nav");
        // document.body.setAttribute("id", "home");
    }

    render() {
        return (
            <div>
                <Nav/>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default Looplab;
