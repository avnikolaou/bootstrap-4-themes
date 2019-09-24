import React,{ Component } from 'react';
import explore from "../../images/looplab/explore-section1.jpg";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Explore extends Component{
    render() {
        return(
            <div>
                <section id={"explore-head-section"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col text-center py-5"}>
                                <h1 className={"display-4"}>Explore</h1>
                                <p>Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους επαγγελματίες της τυπογραφίας
                                    και στοιχειοθεσίας.
                                </p>
                                <a href="#" className={"btn btn-outline-secondary"}>Find Out More</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id={"explore-section"} className={"bg-light text-muted py-5"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-md-6"}>
                                <img className={"img img-fluid mb-3 rounded-circle"} src={explore} alt=""/>
                            </div>
                            <div className={"col-md-6"}>
                                <h3>Explore & Connect</h3>
                                <p>Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους επαγγελματίες της τυπογραφίας
                                    και στοιχειοθεσίας. Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους επαγγελματίες της τυπογραφίας
                                    και στοιχειοθεσίας.
                                </p>
                                <div className={"d-flex"}>
                                    <div className={"p-4 align-self-start"}>
                                        <FontAwesomeIcon icon={"check"} className={"fa-2x"}/>
                                    </div>
                                    <div className={"p-4 align-self-end"}>
                                        Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους επαγγελματίες της τυπογραφίας
                                        και στοιχειοθεσίας.
                                    </div>
                                </div>

                                <div className={"d-flex"}>
                                    <div className={"p-4 align-self-start"}>
                                        <FontAwesomeIcon icon={"check"} className={"fa-2x"}/>
                                    </div>
                                    <div className={"p-4 align-self-end"}>
                                        Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους επαγγελματίες της τυπογραφίας
                                        και στοιχειοθεσίας.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Explore
