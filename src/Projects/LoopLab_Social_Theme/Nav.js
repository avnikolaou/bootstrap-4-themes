import React,{ Component } from 'react';
import { Link } from "react-scroll";
import "./App.css"

class Nav extends Component{
    render() {
        return (
            <nav className={"navbar navbar-expand-sm bg-dark navbar-dark fixed-top navbar-border"} id={"main-nav"}>
                <div className={"container"}>
                    <a href="/" className={"navbar-brand"}>LoopLAB</a>
                    <button className={"navbar-toggler"} data-toggle = "collapse" data-target = "#navbarCollapse">
                        <span className={"navbar-toggler-icon"}></span>
                    </button>
                    <div className={"collapse navbar-collapse"} id={"navbarCollapse"}>
                        <ul className={"navbar-nav ml-auto"}>
                            <li className={"nav-item"}>
                                <Link className={"nav-link"} to="home-section" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>Home</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link className={"nav-link"} to="explore-head-section" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>Explore</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link className={"nav-link"} to="create-head-section" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>Create</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link className={"nav-link"} to="share-head-section" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>Share</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav
