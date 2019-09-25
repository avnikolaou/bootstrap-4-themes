import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Newsletter extends Component {

    render() {
        return (
            <section id={"newsletter"} className={"bg-dark text-white py-5"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-md-4"}>
                            <input className={"form-control form-control-lg mb-resp"} type="text" placeholder={"Enter Name"}/>
                        </div>

                        <div className={"col-md-4"}>
                            <input className={"form-control form-control-lg mb-resp"} type="text" placeholder={"Enter Email"}/>
                        </div>

                        <div className={"col-md-4"}>
                            <button className={"btn btn-primary btn-lg btn-block"}>
                                <FontAwesomeIcon icon="envelope-open" className={"pr-1"}/>Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Newsletter
