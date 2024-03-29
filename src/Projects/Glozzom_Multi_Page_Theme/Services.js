import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Services extends Component {

    render() {
        return (
            <div>

                {/*PAGE HEADER*/}
                <header id={"page-header"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-md-6 m-auto text-center"}>
                                <h1>Our Services</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, temporibus?</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/*SERVICES SECTION*/}
                <section id={"services"} className={"py-5"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-md-4"}>
                                <div className={"card text-center{"}>
                                    <div className={"card-header bg-dark text-white"}>
                                        <h3>Service Plan One</h3>
                                    </div>
                                    <div className={"card-body"}>
                                        <h4 className={"card-title"}>$59.99/Month</h4>
                                        <p className={"card-text"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quis.</p>
                                        <ul className={"list-group"}>
                                            <li className={"list-group-item"}>
                                                <FontAwesomeIcon icon={"check"}/> Feature One
                                            </li>
                                            <li className={"list-group-item"}>
                                                <FontAwesomeIcon icon={"check"}/> Feature Two
                                            </li>
                                            <li className={"list-group-item"}>
                                                <FontAwesomeIcon icon={"check"}/> Feature Three
                                            </li>
                                            <li className={"list-group-item"}>
                                                <FontAwesomeIcon icon={"check"}/> Feature Four
                                            </li>
                                            <li className={"list-group-item"}>
                                                <FontAwesomeIcon icon={"check"}/> Feature Five
                                            </li>
                                        </ul>
                                        <a href={"#"} className={"btn btn-danger btn-block mt-2"}>Get It</a>
                                    </div>
                                    <div className={"card-footer text-muted"}>
                                        1 Year Plan
                                    </div>
                                </div>
                            </div>
                            <div className={"col-md-4"}>
                                <div className={"card text-center"}>
                                    <div className={"card-header bg-dark text-white"}>
                                        <h3>Service Plan Two</h3>
                                    </div>
                                    <div className={"card-body"}>
                                        <h4 className={"card-title"}>$99.99/Month</h4>
                                        <p className={"card-text"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quis.</p>
                                        <ul className={"list-group"}>
                                            <li className={"list-group-item"}>
                                                <FontAwesomeIcon icon={"check"}/> Feature One
                                            </li>
                                            <li className={"list-group-item"}>
                                                <FontAwesomeIcon icon={"check"}/> Feature Two
                                            </li>
                                            <li className={"list-group-item"}>
                                                <FontAwesomeIcon icon={"check"}/> Feature Three
                                            </li>
                                            <li className={"list-group-item"}>
                                                <FontAwesomeIcon icon={"check"}/> Feature Four
                                            </li>
                                            <li className={"list-group-item"}>
                                                <FontAwesomeIcon icon={"check"}/> Feature Five
                                            </li>
                                        </ul>
                                        <a href={"#"} className={"btn btn-danger btn-block mt-2"}>Get It</a>
                                    </div>
                                    <div className={"card-footer text-muted"}>
                                        1 Year Plan
                                    </div>
                                </div>
                            </div>
                            <div className={"col-md-4"}>
                                <div className={"card text-center"}>
                                    <div className={"card-header bg-dark text-white"}>
                                        <h3>Service Plan Three</h3>
                                    </div>
                                    <div className={"card-body"}>
                                        <h4 className={"card-title"}>$129.99/Month</h4>
                                        <p className={"card-text"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quis.</p>
                                        <ul className={"list-group"}>
                                            <li className={"list-group-item"}>
                                                <FontAwesomeIcon icon={"check"}/> Feature One
                                            </li>
                                            <li className={"list-group-item"}>
                                                <FontAwesomeIcon icon={"check"}/> Feature Two
                                            </li>
                                            <li className={"list-group-item"}>
                                                <FontAwesomeIcon icon={"check"}/> Feature Three
                                            </li>
                                            <li className={"list-group-item"}>
                                                <FontAwesomeIcon icon={"check"}/> Feature Four
                                            </li>
                                            <li className={"list-group-item"}>
                                                <FontAwesomeIcon icon={"check"}/> Feature Five
                                            </li>
                                        </ul>
                                        <a href={"#"} className={"btn btn-danger btn-block mt-2"}>Get It</a>
                                    </div>
                                    <div className={"card-footer text-muted"}>
                                        1 Year Plan
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Services
