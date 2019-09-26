import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/mizuxe/mlogo.png"

class Contact extends Component {
    render() {
        return (
            <section id={"contact"} className={"bg-light py-5"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-lg-9"}>
                            <h3>Get In Touch</h3>
                            <p className={"lead"}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <form action="">
                                <div className={"input-group input-group-lb mb-3"}>
                                    <div className={"input-group-prepend"}>
                                        <span className={"input-group-text"}>
                                            <FontAwesomeIcon icon="user"/>
                                        </span>
                                    </div>
                                    <input type="text" className={"form-control"} placeholder="Name"/>
                                </div>

                                <div className={"input-group input-group-lb mb-3"}>
                                    <div className={"input-group-prepend"}>
                                        <span className={"input-group-text"}>
                                            <FontAwesomeIcon icon="envelope"/>
                                        </span>
                                    </div>
                                    <input type="text" className={"form-control"} placeholder="Email"/>
                                </div>

                                <div className={"input-group input-group-lb mb-3"}>
                                    <div className={"input-group-prepend"}>
                                        <span className={"input-group-text"}>
                                            <FontAwesomeIcon icon="pencil-alt"/>
                                        </span>
                                    </div>
                                    <textarea type="text" className={"form-control"} rows={5}></textarea>
                                </div>

                                <input type="submit" value={"Submit"} className={"btn custom-input btn-block btn-lg"}/>
                            </form>
                        </div>

                        <div className={"col-lg-3 align-self-center"}>
                            <img src={logo} alt="" className={"img-fluid"}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact
