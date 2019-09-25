import React, { Component } from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import person1 from '../../images/mizuxe/person1.jpg'
import person2 from '../../images/mizuxe/person2.jpg'
import person3 from '../../images/mizuxe/person3.jpg'
import person4 from '../../images/mizuxe/person4.jpg'

class Authors extends Component{
    render() {
        return (
            <section id={"authors"} className={"my-5 text-center"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col"}>
                            <div className={"info-header mb-5"}>
                                <h1 className={"pb-5"}>
                                    Meet The Authors
                                </h1>
                                <p className={"lead"}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={"row"}>
                        <div className={"col-lg-3 col-md-6"}>
                            <div className={"card"}>
                                <div className={"card-body"}>
                                    <img src={person1} alt="" className={"img-fluid rounded-circle w-50 mb-3"}/>
                                    <h3>Susan Willims</h3>
                                    <h5 className={"text-muted"}>Lead Writer</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className={"d-flex justify-content-center"}>
                                        <div className={"p-4"}>
                                            <a href="http://facebook.com">
                                                <FontAwesomeIcon icon={['fab', 'facebook']}/>
                                            </a>
                                        </div>
                                        <div className={"p-4"}>
                                            <a href="http://facebook.com">
                                                <FontAwesomeIcon icon={['fab', 'twitter']}/>
                                            </a>
                                        </div>
                                        <div className={"p-4"}>
                                            <a href="http://facebook.com">
                                                <FontAwesomeIcon icon={['fab', 'instagram']}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"col-lg-3 col-md-6"}>
                            <div className={"card"}>
                                <div className={"card-body"}>
                                    <img src={person2} alt="" className={"img-fluid rounded-circle w-50 mb-3"}/>
                                    <h3>Grace Smith</h3>
                                    <h5 className={"text-muted"}>Co-Writer</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className={"d-flex justify-content-center"}>
                                        <div className={"p-4"}>
                                            <a href="http://facebook.com">
                                                <FontAwesomeIcon icon={['fab', 'facebook']}/>
                                            </a>
                                        </div>
                                        <div className={"p-4"}>
                                            <a href="http://facebook.com">
                                                <FontAwesomeIcon icon={['fab', 'twitter']}/>
                                            </a>
                                        </div>
                                        <div className={"p-4"}>
                                            <a href="http://facebook.com">
                                                <FontAwesomeIcon icon={['fab', 'instagram']}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"col-lg-3 col-md-6"}>
                            <div className={"card"}>
                                <div className={"card-body"}>
                                    <img src={person3} alt="" className={"img-fluid rounded-circle w-50 mb-3"}/>
                                    <h3>John Doe</h3>
                                    <h5 className={"text-muted"}>Editor</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className={"d-flex justify-content-center"}>
                                        <div className={"p-4"}>
                                            <a href="http://facebook.com">
                                                <FontAwesomeIcon icon={['fab', 'facebook']}/>
                                            </a>
                                        </div>
                                        <div className={"p-4"}>
                                            <a href="http://facebook.com">
                                                <FontAwesomeIcon icon={['fab', 'twitter']}/>
                                            </a>
                                        </div>
                                        <div className={"p-4"}>
                                            <a href="http://facebook.com">
                                                <FontAwesomeIcon icon={['fab', 'instagram']}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"col-lg-3 col-md-6"}>
                            <div className={"card"}>
                                <div className={"card-body"}>
                                    <img src={person4} alt="" className={"img-fluid rounded-circle w-50 mb-3"}/>
                                    <h3>Kevin Swanson</h3>
                                    <h5 className={"text-muted"}>Designer</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className={"d-flex justify-content-center"}>
                                        <div className={"p-4"}>
                                            <a href="http://facebook.com">
                                                <FontAwesomeIcon icon={['fab', 'facebook']}/>
                                            </a>
                                        </div>
                                        <div className={"p-4"}>
                                            <a href="http://facebook.com">
                                                <FontAwesomeIcon icon={['fab', 'twitter']}/>
                                            </a>
                                        </div>
                                        <div className={"p-4"}>
                                            <a href="http://facebook.com">
                                                <FontAwesomeIcon icon={['fab', 'instagram']}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Authors
