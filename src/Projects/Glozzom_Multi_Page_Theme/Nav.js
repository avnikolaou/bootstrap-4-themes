import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import './App.scss'

class Nav extends Component {
    render() {
        return (
            <nav className={"nav navbar navbar-expand-sm navbar-dark bg-dark glozzom-navbar"}>
                <div className={"container"}>
                    <a href="/" className={"navbar-brand"}>Glozzom</a>
                    <button className={"navbar-toggler"} data-toggle={"collapse"} data-target={"#navbarCollapse"}>
                        <span className={"navbar-toggler-icon"}></span>
                    </button>
                    <div id={"navbarCollapse"} className={"collapse navbar-collapse"}>
                        <ul className={"navbar-nav ml-auto"}>
                            <li className={"nav-item"}>
                                <NavLink className={"nav-link pointer"} to="/Glozzom" activeClassName={"active"}>Home</NavLink>
                            </li>

                            <li className={"nav-item"}>
                                <NavLink className={"nav-link pointer"} to="/Glozzom/about" activeClassName={"active"}>About</NavLink>
                            </li>

                            <li className={"nav-item"}>
                                <NavLink className={"nav-link pointer"} to="/Glozzom/services" activeClassName={"active"}>Servcies</NavLink>
                            </li>

                            <li className={"nav-item"}>
                                <NavLink className={"nav-link pointer"} to="/Glozzom/blog" activeClassName={"active"}>Blog</NavLink>
                            </li>

                            <li className={"nav-item"}>
                                <NavLink className={"nav-link pointer"} to="/Glozzom/contact" activeClassName={"active"}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav
