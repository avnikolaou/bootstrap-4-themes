import React, { Component } from 'react';
import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


class Looplab extends Component{

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
