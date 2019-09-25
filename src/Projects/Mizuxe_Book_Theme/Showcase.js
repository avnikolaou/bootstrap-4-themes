import React, { Component } from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import book from '../../images/mizuxe/book.png'
import './App.scss'

class Showcase extends Component{

    render() {
        return (
            <section id={"showcase"} className={"py-5"}>
                <div className={"primary-overlay text-white"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-lg-6 text-center"}>
                                <h1 className={"display-2 mt-5 pt-5"}>
                                    Do What You Dream Of...
                                </h1>
                                <p className={"lead"}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                                <a className={"btn btn-outline-secondary btn-lg text-white"} href="">
                                    <FontAwesomeIcon icon={"arror-right"} className={"fa-2x"}/>Read more
                                </a>
                            </div>

                            <div className={"col-lg-6 text-center"}>
                                <img className={"img-fluid d-none d-lg-block"} src={book} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Showcase
