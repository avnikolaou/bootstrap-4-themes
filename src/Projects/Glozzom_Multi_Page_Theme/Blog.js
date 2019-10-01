import React, { Component } from 'react'

class Blog extends Component {

    render() {
        return (
            <div>

                {/*PAGE HEADER*/}
                <header id={"page-header"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-md-6 m-auto text-center"}>
                                <h1>Our Services</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, temporibus?</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/*BLOG SECTION*/}
                <div id={"blog"} className={"py-3"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col"}>
                                <div className={"card-columns"}>
                                    <div className={"card"}>
                                        <img src="https://source.unsplash.com/random/300x200" alt="" className={"img-fluid card-img-top"}/>
                                        <div className={"card-body"}>
                                            <h4 className={"card-title"}>Blog Post One</h4>
                                            <small className={"text-muted"}>Written by Jeff on 20-05-2019</small>
                                            <hr/>
                                            <p className={"text"}>Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                                text ever since the 1500s.
                                            </p>
                                        </div>
                                    </div>

                                    <div className={"card p-3"}>
                                        <blockquote className={"card-blockquote card-body"}>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </blockquote>
                                        <footer className={"blockquote-footer"}>
                                            <small className={"text-muted"}>
                                                Someone Famouse in <cite title={"Source Title"}>Source Title</cite>
                                            </small>
                                        </footer>
                                    </div>

                                    <div className={"card"}>
                                        <img src="https://source.unsplash.com/random/301x200" alt="" className={"img-fluid card-img-top"}/>
                                        <div className={"card-body"}>
                                            <h4 className={"card-title"}>Blog Post Two</h4>
                                            <small className={"text-muted"}>Written by Jeff on 20-05-2019</small>
                                            <hr/>
                                            <p className={"text"}>Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                                text ever since the 1500s.
                                            </p>
                                        </div>
                                    </div>

                                    <div className={"card p-3 bg-danger text-white"}>
                                        <blockquote className={"card-blockquote card-body"}>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </blockquote>
                                        <footer className={"blockquote-footer"}>
                                            <small className={"text-white"}>
                                                Someone Famouse in <cite title={"Source Title"}>Source Title</cite>
                                            </small>
                                        </footer>
                                    </div>

                                    <div className={"card"}>
                                        <img src="https://source.unsplash.com/random/302x200" alt="" className={"img-fluid card-img-top"}/>
                                        <div className={"card-body"}>
                                            <h4 className={"card-title"}>Blog Post Three</h4>
                                            <small className={"text-muted"}>Written by Jeff on 20-05-2019</small>
                                            <hr/>
                                            <p className={"text"}>Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                                text ever since the 1500s.
                                            </p>
                                        </div>
                                    </div>

                                    <div className={"card p-3"}>
                                        <blockquote className={"card-blockquote card-body"}>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </blockquote>
                                        <footer className={"blockquote-footer"}>
                                            <small className={"text-muted"}>
                                                Someone Famouse in <cite title={"Source Title"}>Source Title</cite>
                                            </small>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog
