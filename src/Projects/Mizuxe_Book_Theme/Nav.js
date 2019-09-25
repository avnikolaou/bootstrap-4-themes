import React, { Component } from 'react'
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
                                <a href="#home" className={"nav-link"}>Home</a>
                            </li>
                            <li className={"nav-item"}>
                                <a href="#about" className={"nav-link"}>About</a>
                            </li>
                            <li className={"nav-item"}>
                                <a href="#authors" className={"nav-link"}>Meet The Authors</a>
                            </li>
                            <li className={"nav-item"}>
                                <a href="#contact" className={"nav-link"}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav
