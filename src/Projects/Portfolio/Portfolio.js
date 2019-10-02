import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from 'jquery';

import './Styles.css'
import profile from "../../images/portfoliogrid/person1.jpg"

class Portfolio extends Component {

    componentDidMount() {
        $('.port-item').click(function () {
            $('.collapse').collapse('hide');
        });
    }

    render() {
        return (
            <div className={"container"}>
                <header id={"main-header"}>
                    <div className={"row no-gutters"}>
                        <div className={"col-lg-4 col-md-5"}>
                            <img src={profile} alt={""}/>
                        </div>

                        <div className={"col-lg-8 col-md-7"}>
                            <div className={"d-flex flex-column"}>
                                <div className={"p-5 bg-dark text-white"}>
                                    <div className={"d-flex flex-row justify-content-between align-items-center"}>
                                        <h1 className={"display-4"}>John Doe</h1>
                                        <div>
                                            <a href={"htts://twitter.com"}><FontAwesomeIcon icon={['fab', 'twitter']}/></a>
                                        </div>

                                        <div>
                                            <a href={"htts://facebook.com"}><FontAwesomeIcon icon={['fab', 'facebook']}/></a>
                                        </div>

                                        <div>
                                            <a href={"htts://instagram.com"}><FontAwesomeIcon icon={['fab', 'instagram']}/></a>
                                        </div>

                                        <div>
                                            <a href={"htts://github.com"}><FontAwesomeIcon icon={['fab', 'github']}/></a>
                                        </div>
                                    </div>
                                </div>

                                <div className={"p-4 bg-black"}>
                                    Experienced Full Stack Web Developer!
                                </div>

                                <div>
                                    <div>
                                        <div className={"d-flex flex-row text-white align-items-stretch text-center"}>
                                            <div className={"port-item p-4 bg-primary"} data-toggle={"collapse"}
                                                 data-target={"#home"}>
                                                <FontAwesomeIcon icon={"home"} className={"fa-2x d-block"}/>
                                                <span className={"d-none d-sm-block"}>Home</span>
                                            </div>
                                            <div className={"port-item p-4 bg-success"} data-toggle={"collapse"}
                                                 data-target={"#resume"}>
                                                <FontAwesomeIcon icon={"graduation-cap"} className={"fa-2x d-block"}/>
                                                <span className={"d-none d-sm-block"}>Resume</span>
                                            </div>
                                            <div className={"port-item p-4 bg-warning"} data-toggle={"collapse"}
                                                 data-target={"#work"}>
                                                <FontAwesomeIcon icon={"folder-open"} className={"fa-2x d-block"}/>
                                                <span className={"d-none d-sm-block"}>Work</span>
                                            </div>
                                            <div className={"port-item p-4 bg-danger"} data-toggle={"collapse"}
                                                 data-target={"#contact"}>
                                                <FontAwesomeIcon icon={"envelope"} className={"fa-2x d-block"}/>
                                                <span className={"d-none d-sm-block"}>Contact</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/*HOME*/}
                <div id={"home"} className={"collapse show"}>
                    <div className={"card card-body bg-primary text-white py-5"}>
                        <h2>Welcome To My Page</h2>
                        <p className={"lead"}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!</p>
                    </div>

                    <div className={"card card-body py-5"}>
                        <h3>My Skills</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus ea excepturi officia
                            quisquam atque eos.</p>
                        <hr/>
                        <h4>HTML 5</h4>
                        <div className={"progress mb-3"}>
                            <div className={"progress-bar bg-success"} style={{width:'100%'}}></div>
                        </div>
                        <h4>CSS 3</h4>
                        <div className={"progress mb-3"}>
                            <div className={"progress-bar bg-success"} style={{width:'100%'}}></div>
                        </div>
                        <h4>JavaScript</h4>
                        <div className={"progress mb-3"}>
                            <div className={"progress-bar bg-success"} style={{width:'90%'}}></div>
                        </div>
                        <h4>React</h4>
                        <div className={"progress mb-3"}>
                            <div className={"progress-bar bg-success"} style={{width:'90%'}}></div>
                        </div>
                        <h4>PHP</h4>
                        <div className={"progress mb-3"}>
                            <div className={"progress-bar bg-success"} style={{width:'80%'}}></div>
                        </div>
                    </div>
                </div>

                {/*RESUME*/}
                <div id={"resume"} className={"collapse"}>
                    <div className={"card card-body bg-success text-white py-5"}>
                        <h2>My Resume</h2>
                        <p className={"lead"}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!</p>
                    </div>

                    <div className={"card card-body py-5"}>
                        <h3>Where Have I Worked?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque similique saepe inventore
                            rem vitae esse.</p>
                        <div className={"card-deck"}>
                            <div className={"card"}>
                                <div className={"card-body"}>
                                    <h4 className={"card-title"}>Devmasters</h4>
                                    <p className={"card-text"}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Dolor, magnam.</p>
                                    <p className={"p-2 mb-3 bg-dark text-white"}>
                                        Position: Full Stack Developer
                                    </p>
                                    <p className={"p-2 mb-3 bg-dark text-white"}>
                                        Phone: (444) 444-4444
                                    </p>
                                </div>
                                <div className={"card-footer"}>
                                    <h6 className={"text-muted"}>Dates: 2015 - 2018</h6>
                                </div>
                            </div>

                            <div className={"card"}>
                                <div className={"card-body"}>
                                    <h4 className={"card-title"}>123 Designs</h4>
                                    <p className={"card-text"}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Dolor, magnam.</p>
                                    <p className={"p-2 mb-3 bg-dark text-white"}>
                                        Position: Web Designer
                                    </p>
                                    <p className={"p-2 mb-3 bg-dark text-white"}>
                                        Phone: (222) 222-2222
                                    </p>
                                </div>
                                <div className={"card-footer"}>
                                    <h6 className={"text-muted"}>Dates: 2013 - 2015</h6>
                                </div>
                            </div>

                            <div className={"card"}>
                                <div className={"card-body"}>
                                    <h4 className={"card-title"}>Web Designer Pros</h4>
                                    <p className={"card-text"}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Dolor, magnam.</p>
                                    <p className={"p-2 mb-3 bg-dark text-white"}>
                                        Position: Web Designer
                                    </p>
                                    <p className={"p-2 mb-3 bg-dark text-white"}>
                                        Phone: (333) 333-3333
                                    </p>
                                </div>
                                <div className={"card-footer"}>
                                    <h6 className={"text-muted"}>Dates: 2010 - 2013</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*WORK*/}
                <div id={"work"} className={"collapse"}>
                    <div className={"card card-body bg-warning text-white py-5"}>
                        <h2>My Work</h2>
                        <p className={"lead"}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!</p>
                    </div>

                    <div className={"card card-body py-5"}>
                        <h3>What Have I Built?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum repudiandae debitis,
                            nam iste amet.</p>
                        <div className={"row no-gutters"}>
                            <div className={"col-md-3"}>
                                <a href={"https://unsplash.it/1200/768.jpg?image=252"} data-toggle={"lightbox"}>
                                    <img src={"https://unsplash.it/600.jpg?image=252"} alt={""} className={"img-fluid"}/>
                                </a>
                            </div>
                            <div className={"col-md-3"}>
                                <a href={"https://unsplash.it/1200/768.jpg?image=253"} data-toggle={"lightbox"}>
                                    <img src={"https://unsplash.it/600.jpg?image=253"} alt={""} className={"img-fluid"}/>
                                </a>
                            </div>
                            <div className={"col-md-3"}>
                                <a href={"https://unsplash.it/1200/768.jpg?image=254"} data-toggle={"lightbox"}>
                                    <img src={"https://unsplash.it/600.jpg?image=254"} alt={""} className={"img-fluid"}/>
                                </a>
                            </div>
                            <div className={"col-md-3"}>
                                <a href={"https://unsplash.it/1200/768.jpg?image=255"} data-toggle={"lightbox"}>
                                    <img src={"https://unsplash.it/600.jpg?image=255"} alt={""} className={"img-fluid"}/>
                                </a>
                            </div>
                        </div>

                        <div className={"row no-gutters"}>
                            <div className={"col-md-3"}>
                                <a href={"https://unsplash.it/1200/768.jpg?image=256"} data-toggle={"lightbox"}>
                                    <img src={"https://unsplash.it/600.jpg?image=256"} alt={""} className={"img-fluid"}/>
                                </a>
                            </div>
                            <div className={"col-md-3"}>
                                <a href={"https://unsplash.it/1200/768.jpg?image=257"} data-toggle={"lightbox"}>
                                    <img src={"https://unsplash.it/600.jpg?image=257"} alt={""} className={"img-fluid"}/>
                                </a>
                            </div>
                            <div className={"col-md-3"}>
                                <a href={"https://unsplash.it/1200/768.jpg?image=258"} data-toggle={"lightbox"}>
                                    <img src={"https://unsplash.it/600.jpg?image=258"} alt={""} className={"img-fluid"}/>
                                </a>
                            </div>
                            <div className={"col-md-3"}>
                                <a href={"https://unsplash.it/1200/768.jpg?image=259"} data-toggle={"lightbox"}>
                                    <img src={"https://unsplash.it/600.jpg?image=259"} alt={""} className={"img-fluid"}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/*CONTACT*/}
                <div id={"contact"} className={"collapse"}>
                    <div className={"card card-body bg-danger text-white py-5"}>
                        <h2>Contact</h2>
                        <p className={"lead"}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!</p>
                    </div>

                    <div className={"card card-body py-5"}>
                        <h3>Get In Touch</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos illo, dicta id voluptates
                            enim.</p>
                        <form>
                            <div className={"form-group"}>
                                <div className={"input-group input-group-lg"}>
                                    <div className={"input-group-prepend"}>
                                        <span className={"input-group-text bg-danger text-white"}>
                                            <FontAwesomeIcon icon={"user"}/>
                                        </span>
                                    </div>
                                    <input type={"text"} className={"form-control bg-dark text-white"} placeholder={"Name"}/>
                                </div>
                            </div>

                            <div className={"form-group"}>
                                <div className={"input-group input-group-lg"}>
                                    <div className={"input-group-prepend"}>
                                        <span className={"input-group-text bg-danger text-white"}>
                                          <FontAwesomeIcon icon={"envelope"}/>
                                        </span>
                                    </div>
                                    <input type={"email"} className={"form-control bg-dark text-white"} placeholder={"Email"}/>
                                </div>
                            </div>

                            <div className={"form-group"}>
                                <div className={"input-group input-group-lg"}>
                                    <div className={"input-group-prepend"}>
                                        <span className={"input-group-text bg-danger text-white"}>
                                          <FontAwesomeIcon icon={"pen-alt"}/>
                                        </span>
                                    </div>
                                    <textarea className={"form-control bg-dark text-white"} placeholder={"Name"}></textarea>
                                </div>
                            </div>
                            <input type={"submit"} value={"Submit"} className={"btn btn-danger btn-block btn-lg"}/>
                        </form>
                    </div>
                </div>

                {/*FOOTER*/}
                <footer id={"main-footer"} className={"p-5 bg-dark text-white"}>
                    <div className={"row"}>
                        <div className={"col-md-6"}>
                            <a href={""} className={"btn btn-outline-light"}>
                                <FontAwesomeIcon icon={"cloud"}/> Download Resume
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Portfolio
