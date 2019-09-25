import React, { Component } from 'react'

class Boxes extends Component{

    render() {
        return (
            <section id={"boxes"} className={"py-5"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-md-3"}>
                            <div className={"card text-center border-primary mb-resp"}>
                                <div className={"card-body"}>
                                    <h3 className={"custon-h3"}>Be Better</h3>
                                    <p className={"text-muted"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>

                        <div className={"col-md-3"}>
                            <div className={"card text-center text-white custom-box mb-resp"}>
                                <div className={"card-body"}>
                                    <h3>Be Smarter</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>

                        <div className={"col-md-3"}>
                            <div className={"card text-center border-primary mb-resp"}>
                                <div className={"card-body"}>
                                    <h3 className={"custon-h3"}>Be Faster</h3>
                                    <p className={"text-muted"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>

                        <div className={"col-md-3"}>
                            <div className={"card text-center text-white custom-box"}>
                                <div className={"card-body"}>
                                    <h3>Be Stronger</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Boxes
