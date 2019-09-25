import React, { Component } from 'react'

class Footer extends Component {

    getYear() {
        return new Date().getFullYear();
    }

    render() {
        return (
            <section id={"footer"} className={"py-5 text-white"}>
                <div className={"container"}>
                    <div className={"row text-center"}>
                        <div className={"col-md-12 ml-auto"}>
                            <p className={"lead"}>
                                Copyright &copy; <span id={"year"}>{this.getYear()}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer
