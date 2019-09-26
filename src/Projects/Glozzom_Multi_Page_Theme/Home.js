import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import laptop from '../../images/glozzom/laptop.png'
import $ from 'jquery';

class Home extends Component {


    componentDidMount() {
        // Slider Timer
        $('.carousel').carousel({
            interval: 6000,
            pause: 'hover'
        });

        // Video Play
        $(function () {
            // Auto play modal video
            $(".video").click(function () {
                let theModal = $(this).data("target"),
                    videoSRC = $(this).attr("data-video"),
                    videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
                $(theModal + ' iframe').attr('src', videoSRCauto);
                $(theModal + ' button.close').click(function () {
                    $(theModal + ' iframe').attr('src', videoSRC);
                });
            });
        });
    }

    render() {
        return (
            <div>
                {/*SHOWCASE SLIDER*/}
                <section id={"showcase2"}>
                    <div id={"myCarousel"} className={"carousel slide"} data-ride={"carousel"}>
                        <ol className={"carousel-indicators"}>
                            <li className={"active"} data-target={"#myCarousel"} data-slide-to={"0"}></li>
                            <li data-target={"#myCarousel"} data-slide-to={"1"}></li>
                            <li data-target={"#myCarousel"} data-slide-to={"2"}></li>
                        </ol>
                        <div className={"carousel-inner"}>
                            <div className={"carousel-item carousel-image-1 active"}>
                                <div className={"container"}>
                                    <div className={"carousel-caption d-none d-sm-block text-right mb-5"}>
                                        <h1 className={"display-3"}>Heading One</h1>
                                        <p className={"lead"}>Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s,</p>
                                        <a href="" className={"btn btn-danger btn-lg"}>Sign Up Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className={"carousel-item carousel-image-2"}>
                                <div className={"container"}>
                                    <div className={"carousel-caption d-none d-sm-block mb-5"}>
                                        <h1 className={"display-3"}>Heading Two</h1>
                                        <p className={"lead"}>Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s,</p>
                                        <a href="" className={"btn btn-primary btn-lg"}>Learn More</a>
                                    </div>
                                </div>
                            </div>

                            <div className={"carousel-item carousel-image-3"}>
                                <div className={"container"}>
                                    <div className={"carousel-caption d-none d-sm-block text-right mb-5"}>
                                        <h1 className={"display-3"}>Heading Three</h1>
                                        <p className={"lead"}>Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s,</p>
                                        <a href="" className={"btn btn-success btn-lg"}>Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <a href="#myCarousel" className={"carousel-control-prev"} data-slide={"prev"}>
                                <span className={"carousel-control-prev-icon"}></span>
                            </a>

                            <a href="#myCarousel" className={"carousel-control-next"} data-slide={"next"}>
                                <span className={"carousel-control-next-icon"}></span>
                            </a>
                        </div>
                    </div>
                </section>

                {/*HOME ICON SECTION*/}
                <section id={"home-icons"} className={"py-5"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-md-4 mb-4 text-center"}>
                                <FontAwesomeIcon icon={"cog"} className={"fa-3x mb-2"}/>
                                <h3>Turning Gears</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div><div className={"col-md-4 mb-4 text-center"}>
                                <FontAwesomeIcon icon={"cloud"} className={"fa-3x mb-2"}/>
                                <h3>Sending data</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div><div className={"col-md-4 mb-4 text-center"}>
                                <FontAwesomeIcon icon={"cart-plus"} className={"fa-3x mb-2"}/>
                                <h3>Making Money</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*HOME HEADING SECTION*/}
                <section id={"home-heading"} className={"p-5"}>
                    <div className={"dark-overlay"}>
                        <div className={"row"}>
                            <div className={"col"}>
                                <div className={"container pt-5"}>
                                    <h1>Are You Ready To Get Started</h1>
                                    <p className={"d-none d-md-block"}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*INFO SECTION*/}
                <section id={"info"} className={"py-3"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-md-6 align-self-center"}>
                                <h3>Lorem Ipsum</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="" className={"btn btn-danger btn-large"}>Learn More</a>
                            </div>

                            <div className={"col-md-6 align-self-senter"}>
                                <img src={laptop} alt="" className={"img-fluid"}/>
                            </div>
                        </div>
                    </div>
                </section>

                {/*VIDEO PLAY*/}
                <section id={"video-play"}>
                    <div className={"dark-overlay"}>
                        <div className={"row"}>
                            <div className={"col"}>
                                <div className={"container p-5"}>
                                    <a href="#" className={"video"} data-video={"https://www.youtube.com/embed/HnwsG9a5riA"}
                                       data-toggle={"modal"} data-target={"#videoModal"}><FontAwesomeIcon icon={"play"} className={"fa-3x"}/>
                                    </a>
                                    <h1>See What We Do</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*VIDEO MODAL*/}
                <div className="modal fade" id="videoModal">
                    <div className="modal-dialog">
                        <div className={"modal-content"}>
                            <div className="modal-body">
                                <button className="close" data-dismiss="modal">
                                    <span>&times;</span>
                                </button>
                                <iframe src="" frameborder="0" height="350" width="100%" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home
