import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class Details extends Component {

    render() {
        return (
            <div>

                {/*HEADER*/}
                <header id={"main-header"} className={"py-2 bg-primary text-white"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-md-6"}>
                                <h1>
                                    Post One</h1>
                            </div>
                        </div>
                    </div>
                </header>

                {/*ACTIONS*/}
                <section id={"actions"} className={"py-4 mb-4 bg-light"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-md-3"}>
                                <Link to="/Blogen" className={"btn btn-light btn-block"}>
                                    <FontAwesomeIcon icon={"arrow-left"}/> Back To Dashboard
                                </Link>
                            </div>
                            <div className={"col-md-3"}>
                                <Link to="/Blogen" className={"btn btn-success btn-block"}>
                                    <FontAwesomeIcon icon={"arrow-left"}/> Save Changes
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/Blogen" className={"btn btn-danger btn-block"}>
                                    <FontAwesomeIcon icon={"arrow-left"}/> Delete Post
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/*DETAILS*/}
                <section id={"details"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col"}>
                                <div className={"card"}>
                                    <div className={"card-header"}>
                                        <h4>Edit Post</h4>
                                    </div>
                                    <div className={"card-body"}>
                                        <form>
                                            <div className={"form-group"}>
                                                <label htmlFor={"title"}>Title</label>
                                                <input type={"text"} className={"form-control"} value={"Post One"}/>
                                            </div>
                                            <div className={"form-group"}>
                                                <label htmlFor={"category"}>Category</label>
                                                <select className={"form-control"}>
                                                    <option value="" selected>Web Development</option>
                                                    <option value="">Tech Gadgets</option>
                                                    <option value="">Business</option>
                                                    <option value="">Health & Wellness</option>
                                                </select>
                                            </div>
                                            <div className={"form-group"}>
                                                <label htmlFor={"image"}>Upload Image</label>
                                                <div className={"custom-file"}>
                                                    <input type={"file"} className={"custom-file-input"} id={"image"}/>
                                                        <label htmlFor={"image"} className={"custom-file-label"}>Choose
                                                            File</label>
                                                </div>
                                                <small className={"form-text text-muted"}>Max Size 3mb</small>
                                            </div>
                                            <div className={"form-group"}>
                                                <label htmlFor={"body"}>Body</label>
                                                <CKEditor
                                                    editor={ ClassicEditor }
                                                    data = "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Aliquid unde at fugiat explicabo temporibus, tempora animi sunt iusto
                                                    quod beatae optio veritatis velit natus odit error! Possimus esse
                                                    quisquam quibusdam eveniet autem! Minus dolore quisquam nemo similique
                                                    doloribus perspiciatis tempore."
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Details
