import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Nav extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
                <div className="container">
                    <a href="/" className="navbar-brand">Blogen</a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav">
                            <li className="nav-item px-2">
                                <NavLink className={"nav-link pointer"} to="/Blogen" exact={true} activeClassName={"active"}>Dashboard</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink className={"nav-link pointer"} to="/Blogen/posts" exact={true} activeClassName={"active"}>Posts</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink className={"nav-link pointer"} to="/Blogen/categories" exact={true} activeClassName={"active"}>Categories</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink className={"nav-link pointer"} to="/Blogen/users" exact={true} activeClassName={"active"}>Users</NavLink>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown mr-3">
                                <NavLink className={"nav-link pointer dropdown-toggle"} to="" exact={true} activeClassName={"active"} data-toggle={"dropdown"}>
                                    <FontAwesomeIcon icon={"user"}/> Welcome Brad
                                </NavLink>
                                <div className="dropdown-menu">
                                    <NavLink className={"dropdown-item"} to="/Blogen/profile" exact={true} activeClassName={"active"}>
                                        <FontAwesomeIcon icon={"user-circle"}/> Profile
                                    </NavLink>
                                    <NavLink className={"dropdown-item"} to="/Blogen/settings" exact={true} activeClassName={"active"}>
                                        <FontAwesomeIcon icon={"cog"}/> Settings
                                    </NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className={"nav-link"} to="/Blogen/logout" exact={true} activeClassName={"active"}>
                                    <FontAwesomeIcon icon={"user-times"}/> Logout
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav
