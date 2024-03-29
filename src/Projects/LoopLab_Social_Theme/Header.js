import React,{ Component } from 'react';
import "./App.css"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Header extends Component{

    render() {
        return (
            <header id={"home-section"} className={"head-section"}>
                <div className={"dark-overlay"}>
                    <div className={"home-inner container"}>
                        <div className={"row"}>
                            <div className={"col-lg-8 d-none d-lg-block"}>
                                <h1 className={"display-4"}>Build <strong>social profiles</strong> and gain revenue <strong>profits</strong></h1>
                                <div className={"d-flex"}>
                                    <div className={"p-4 align-self-start"}>
                                        <FontAwesomeIcon icon="check" className={"fa-2x"} />
                                    </div>
                                    <div className={"p-4 align-self-end"}>
                                        Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους επαγγελματίες της τυπογραφίας και στοιχειοθεσίας.
                                    </div>
                                </div>
                                <div className={"d-flex"}>
                                    <div className={"p-4 align-self-start"}>
                                        <FontAwesomeIcon icon="check" className={"fa-2x"} />
                                    </div>
                                    <div className={"p-4 align-self-end"}>
                                        Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους επαγγελματίες της τυπογραφίας και στοιχειοθεσίας.
                                    </div>
                                </div>
                                <div className={"d-flex"}>
                                    <div className={"p-4 align-self-start"}>
                                        <FontAwesomeIcon icon="check" className={"fa-2x"} />
                                    </div>
                                    <div className={"p-4 align-self-end"}>
                                        Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους επαγγελματίες της τυπογραφίας και στοιχειοθεσίας.
                                    </div>
                                </div>
                            </div>
                            <div className={"col-lg-4"}>
                                <div className={"card bg-primary text-center card-form"}>
                                    <div className={"card-body"}>
                                        <h3>Sign Up Today</h3>
                                        <p>Please fill out this form to register</p>
                                        <form action="">
                                            <div className={"form-group"}>
                                                <input type="text" className={"form-control form-control-lg"} placeholder={"Username"}/>
                                            </div>
                                            <div className={"form-group"}>
                                                <input type="text" className={"form-control form-control-lg"} placeholder={"Email"}/>
                                            </div>
                                            <div className={"form-group"}>
                                                <input type="text" className={"form-control form-control-lg"} placeholder={"Password"}/>
                                            </div>
                                            <div className={"form-group"}>
                                                <input type="text" className={"form-control form-control-lg"} placeholder={"Confirm Password"}/>
                                            </div>
                                            <input type="submit" value={"Submit"} className={"btn btn-outline-light btn-block"}/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}

export default Header
