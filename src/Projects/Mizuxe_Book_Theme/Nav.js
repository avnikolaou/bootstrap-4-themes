import React, { Component } from 'react'
import { Link } from "react-scroll";
import './App.scss'
import logo from '../../images/mizuxe/mlogo.png'

class Nav extends Component{

    render() {
        return (
            <nav className={"nav navbar navbar-expand-md navbar-light fixed-top py4 mizuxe-nav"}>
                <div className={"container"}>
                    <a href="/" className={"navbar-brand"}>
                        <img className={"logo"} src={logo} alt=""/>
                        <h3 className={"d-inline align-middle"}>Mizuxe</h3>
                    </a>
                    <button className={"navbar-toggler"} data-toggle="collapse" data-target="#navbarCollapse">
                        <span className={"navbar-toggler-icon"}></span>
                    </button>
                    <div className={"collapse navbar-collapse"} id={"navbarCollapse"}>
                        <ul className={"navbar-nav ml-auto"}>
                            <li className={"nav-item"}>
                                <Link className={"nav-link pointer"} to="showcase" spy={true} smooth={true} offset={-75} duration={500} onSetActive={this.handleSetActive}>Home</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link className={"nav-link pointer"} to="about" spy={true} smooth={true} offset={-70} duration={500} onSetActive={this.handleSetActive}>About</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link className={"nav-link pointer"} to="authors" spy={true} smooth={true} offset={-95} duration={500} onSetActive={this.handleSetActive}>Authors</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link className={"nav-link pointer"} to="contact" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav
