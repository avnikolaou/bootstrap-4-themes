import React,{ Component } from 'react';
import "./App.css"

class Nav extends Component{
    render() {
        return (
            <nav className={"navbar navbar-expand-sm bg-dark navbar-dark fixed-top"} id={"main-nav"}>
                <div className={"container"}>
                    <a href="/" className={"navbar-brand"}>LoopLAB</a>
                    <button className={"navbar-toggler"} data-toggle = "collapse" data-target = "#navbarCollapse">
                        <span className={"navbar-toggler-icon"}></span>
                    </button>
                    <div className={"collapse navbar-collapse"} id={"navbarCollapse"}>
                        <ul className={"navbar-nav ml-auto"}>
                            <li className={"nav-item"}>
                                <a href="#home" className={"nav-link"}>Home</a>
                            </li>
                            <li className={"nav-item"}>
                                <a href="#explore-head-section" className={"nav-link"}>Explore</a>
                            </li>
                            <li className={"nav-item"}>
                                <a href="#create-head-section" className={"nav-link"}>Create</a>
                            </li>
                            <li className={"nav-item"}>
                                <a href="#share-head-section" className={"nav-link"}>Share</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav
