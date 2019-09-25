import React, { Component } from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class About extends Component{

    render() {
        return (
            <section id="about" className={"py-5 text-center bg-light"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col"}>
                            <div className={"info-header mb-5"}>
                                <h1 className={"pb-3"}>
                                    Why This Book?
                                </h1>
                                <p className={"lead pb-3"}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
                                </p>
                            </div>

                            {/*ACCORDION*/}
                            <div id="accordion">
                                <div className={"card"}>
                                    <div className={"card-header"}>
                                        <h5 className={"mb-0"}>
                                            <div href="#collapse1" data-toggle="collapse" data-parent="#accordion">
                                                <FontAwesomeIcon icon="arrow-circle-down" className={"mr-1"}/>Get Inspired
                                            </div>
                                        </h5>
                                    </div>

                                    <div id={"collapse1"} className={"collapse show"}>
                                        <div className={"card-body"}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a
                                            type specimen book. It has survived not only five centuries, but also the
                                            leap into electronic typesetting, remaining essentially unchanged.
                                        </div>
                                    </div>
                                </div>

                                <div className={"card"}>
                                    <div className={"card-header"}>
                                        <h5 className={"mb-0"}>
                                            <div href="#collapse2" data-toggle="collapse" data-parent="#accordion">
                                                <FontAwesomeIcon icon="arrow-circle-down" className={"mr-1"}/>Gain The Knowledge
                                            </div>
                                        </h5>
                                    </div>

                                    <div id={"collapse2"} className={"collapse"}>
                                        <div className={"card-body"}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a
                                            type specimen book. It has survived not only five centuries, but also the
                                            leap into electronic typesetting, remaining essentially unchanged.
                                        </div>
                                    </div>
                                </div>

                                <div className={"card"}>
                                    <div className={"card-header"}>
                                        <h5 className={"mb-0"}>
                                            <div href="#collapse3" data-toggle="collapse" data-parent="#accordion">
                                                <FontAwesomeIcon icon="arrow-circle-down" className={"mr-1"}/>Open Your Mind
                                            </div>
                                        </h5>
                                    </div>

                                    <div id={"collapse3"} className={"collapse"}>
                                        <div className={"card-body"}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a
                                            type specimen book. It has survived not only five centuries, but also the
                                            leap into electronic typesetting, remaining essentially unchanged.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About
