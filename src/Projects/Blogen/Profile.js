import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import avatar from '../../images/blogen/avatar.png'

class Profile extends Component {

    render() {
        return (
            <div>

                {/*HEADER*/}
                <header id={"main-header"} className={"py-2 bg-primary text-white"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-md-6"}>
                                <h1>
                                    <FontAwesomeIcon icon={"user"}/> Edit Profile</h1>
                            </div>
                        </div>
                    </div>
                </header>

                {/*ACTIONS*/}
                <section id={"actions"} className={"py-4 mb-4 bg-light"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-md-3"}>
                                <NavLink className={"btn btn-light btn-block"} to={"/Blogen"} exact={true} activeClassName={"active"}><FontAwesomeIcon icon={"arrow-left"}/> Back To Dashboard</NavLink>
                            </div>
                            <div className={"col-md-3"}>
                                <NavLink className={"btn btn-success btn-block"} to={"/Blogen"} exact={true} activeClassName={"active"}><FontAwesomeIcon icon={"lock"}/> Change Password</NavLink>
                            </div>
                            <div className={"col-md-3"}>
                                <NavLink className={"btn btn-danger btn-block"} to={"/Blogen"} exact={true} activeClassName={"active"}><FontAwesomeIcon icon={"trash"}/> Delete Account</NavLink>
                            </div>
                        </div>
                    </div>
                </section>

                {/*PROFILE*/}
                <section id={"profile"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-md-9"}>
                                <div className={"card"}>
                                    <div className={"card-header"}>
                                        <h4>Edit Profile</h4>
                                    </div>
                                    <div className={"card-body"}>
                                        <form>
                                            <div className={"form-group"}>
                                                <label htmlFor={"name"}>Name</label>
                                                <input type={"text"} className={"form-control"} value={"Brad Traversy"}/>
                                            </div>
                                            <div className={"form-group"}>
                                                <label htmlFor={"email"}>Email</label>
                                                <input type={"email"} className={"form-control"} value={"test@test.com"}/>
                                            </div>
                                            <div className={"form-group"}>
                                                <label htmlFor={"bio"}>Bio</label>
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
                            <div className={"col-md-3"}>
                                <h3>Your Avatar</h3>
                                <img src={avatar} alt={""} className={"d-block img-fluid mb-3"}/>
                                    <button className={"btn btn-primary btn-block"}>Edit Image</button>
                                    <button className={"btn btn-danger btn-block"}>Delete Image</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Profile
