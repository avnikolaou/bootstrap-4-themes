import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavLink} from "react-router-dom";

class Dashboard extends Component {

    render() {
        return (
            <div>

                {/*HEADER*/}
                <header id={"main-header"} className={"py-2 bg-primary text-white"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-md-6"}>
                                <h1>
                                    <FontAwesomeIcon icon={"cog"}/> Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </header>

                {/*ACTIONS*/}
                <section id={"actions"} className={"py-4 mb-4 bg-light"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-md-3"}>
                                <a href={"#"} className={"btn btn-primary btn-block"} data-toggle={"modal"}
                                   data-target={"#addPostModal"}>
                                    <i className={"fas fa-plus"}></i> Add Post
                                </a>
                            </div>
                            <div className={"col-md-3"}>
                                <a href={"#"} className={"btn btn-success btn-block"} data-toggle={"modal"}
                                   data-target={"#addCategoryModal"}>
                                    <i className={"fas fa-plus"}></i> Add Category
                                </a>
                            </div>
                            <div className={"col-md-3"}>
                                <a href={"#"} className={"btn btn-warning btn-block"} data-toggle={"modal"}
                                   data-target={"#addUserModal"}>
                                    <i className={"fas fa-plus"}></i> Add User
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/*POST*/}
                <section id={"posts"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-md-9"}>
                                <div className={"card"}>
                                    <div className={"card-header"}>
                                        <h4>Latest Posts</h4>
                                    </div>
                                    <table className={"table table-striped"}>
                                        <thead className={"thead-dark"}>
                                        <tr>
                                            <th>#</th>
                                            <th>Title</th>
                                            <th>Category</th>
                                            <th>Date</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Post One</td>
                                            <td>Web Development</td>
                                            <td>May 10 2018</td>
                                            <td>
                                                <NavLink className={"btn btn-secondary"} to={"Blogen/details"}><FontAwesomeIcon icon={"angle-double-right"}/> Details</NavLink>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Post Two</td>
                                            <td>Tech Gadgets</td>
                                            <td>May 11 2018</td>
                                            <td>
                                                 <NavLink className={"btn btn-secondary"} to={"Blogen/details"}><FontAwesomeIcon icon={"angle-double-right"}/> Details</NavLink>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Post Three</td>
                                            <td>Web Development</td>
                                            <td>May 13 2018</td>
                                            <td>
                                                <NavLink className={"btn btn-secondary"} to={"Blogen/details"}><FontAwesomeIcon icon={"angle-double-right"}/> Details</NavLink>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Post Four</td>
                                            <td>Business</td>
                                            <td>May 15 2018</td>
                                            <td>
                                                <NavLink className={"btn btn-secondary"} to={"Blogen/details"}><FontAwesomeIcon icon={"angle-double-right"}/> Details</NavLink>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Post Five</td>
                                            <td>Web Development</td>
                                            <td>May 17 2018</td>
                                            <td>
                                                <NavLink className={"btn btn-secondary"} to={"Blogen/details"}><FontAwesomeIcon icon={"angle-double-right"}/> Details</NavLink>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Post Six</td>
                                            <td>Health & Wellness</td>
                                            <td>May 20 2018</td>
                                            <td>
                                                <NavLink className={"btn btn-secondary"} to={"Blogen/details"}><FontAwesomeIcon icon={"angle-double-right"}/> Details</NavLink>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className={"col-md-3"}>
                                <div className={"card text-center bg-primary text-white mb-3"}>
                                    <div className={"card-body"}>
                                        <h3>Posts</h3>
                                        <h4 className={"display-4"}>
                                            <FontAwesomeIcon icon={"pen"}/> 6
                                        </h4>
                                        <NavLink className={"btn btn-outline-light btn-sm"} to={"Blogen/posts"}> View</NavLink>
                                    </div>
                                </div>

                                <div className={"card text-center bg-success text-white mb-3"}>
                                    <div className={"card-body"}>
                                        <h3>Categories</h3>
                                        <h4 className={"display-4"}>
                                            <FontAwesomeIcon icon={"folder"}/> 4
                                        </h4>
                                        <NavLink className={"btn btn-outline-light btn-sm"} to={"Blogen/categories"}> View</NavLink>
                                    </div>
                                </div>

                                <div className={"card text-center bg-warning text-white mb-3"}>
                                    <div className={"card-body"}>
                                        <h3>Users</h3>
                                        <h4 className={"display-4"}>
                                            <FontAwesomeIcon icon={"users"}/> 4
                                        </h4>
                                        <NavLink className={"btn btn-outline-light btn-sm"} to={"Blogen/users"}> View</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*MODALS*/}

                {/*ADD POST MODAL*/}
                <div className={"modal fade"} id={"addPostModal"}>
                    <div className={"modal-dialog modal-lg"}>
                        <div className={"modal-content"}>
                            <div className={"modal-header bg-primary text-white"}>
                                <h5 className={"modal-title"}>Add Post</h5>
                                <button className={"close"} data-dismiss={"modal"}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className={"modal-body"}>
                                <form>
                                    <div className={"form-group"}>
                                        <label htmlFor={"title"}>Title</label>
                                        <input type={"text"} className={"form-control"}/>
                                    </div>
                                    <div className={"form-group"}>
                                        <label htmlFor={"category"}>Category</label>
                                        <select className={"form-control"}>
                                            <option value={""}>Web Development</option>
                                            <option value={""}>Tech Gadgets</option>
                                            <option value={""}>Business</option>
                                            <option value={""}>Health & Wellness</option>
                                        </select>
                                    </div>
                                    <div className={"form-group"}>
                                        <label htmlFor={"image"}>Upload Image</label>
                                        <div className={"custom-file"}>
                                            <input type={"file"} className={"custom-file-input"} id={"image"}/>
                                                <label htmlFor={"image"} className={"custom-file-label"}>Choose File</label>
                                        </div>
                                        <small className={"form-text text-muted"}>Max Size 3mb</small>
                                    </div>
                                    <div className={"form-group"}>
                                        <label htmlFor={"body"}>Body</label>
                                        <textarea name={"editor1"} className={"form-control"}></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className={"modal-footer"}>
                                <button className={"btn btn-primary"} data-dismiss={"modal"}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*ADD CATEGORY MODAL*/}
                <div className={"modal fade"} id={"addCategoryModal"}>
                    <div className={"modal-dialog modal-lg"}>
                        <div className={"modal-content"}>
                            <div className={"modal-header bg-success text-white"}>
                                <h5 className={"modal-title"}>Add Category</h5>
                                <button className={"close"} data-dismiss={"modal"}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className={"modal-body"}>
                                <form>
                                    <div className={"form-group"}>
                                        <label htmlFor={"title"}>Title</label>
                                        <input type={"text"} className={"form-control"}/>
                                    </div>
                                </form>
                            </div>
                            <div className={"modal-footer"}>
                                <button className={"btn btn-success"} data-dismiss={"modal"}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*ADD USER MODAL*/}
                <div className={"modal fade"} id={"addUserModal"}>
                    <div className={"modal-dialog modal-lg"}>
                        <div className={"modal-content"}>
                            <div className={"modal-header bg-warning text-white"}>
                                <h5 className={"modal-title"}>Add User</h5>
                                <button className={"close"} data-dismiss={"modal"}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className={"modal-body"}>
                                <form>
                                    <div className={"form-group"}>
                                        <label htmlFor={"name"}>Name</label>
                                        <input type={"text"} className={"form-control"}/>
                                    </div>
                                    <div className={"form-group"}>
                                        <label htmlFor={"email"}>Email</label>
                                        <input type={"email"} className={"form-control"}/>
                                    </div>
                                    <div className={"form-group"}>
                                        <label htmlFor={"password"}>Password</label>
                                        <input type={"password"} className={"form-control"}/>
                                    </div>
                                    <div className={"form-group"}>
                                        <label htmlFor={"password2"}>Confirm Password</label>
                                        <input type={"password"} className={"form-control"}/>
                                    </div>
                                </form>
                            </div>
                            <div className={"modal-footer"}>
                                <button className={"btn btn-warning"} data-dismiss={"modal"}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard
