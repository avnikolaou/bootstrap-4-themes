import React, { Component } from "react"

class Footer extends Component{

    getYear() {
        return new Date().getFullYear();
    }

    render() {
        return(
            <footer id={"footer-section"} className={"bg-dark head-section"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col text-center py-4"}>
                            <h3>LoopLAB</h3>
                            <p>Copyright &copy; <span id={"year"}>{this.getYear()}</span></p>
                            <button className="btn btn-primary" data-toggle="modal" data-target="#contactModal">Contact Us</button>
                        </div>
                    </div>
                </div>

                <div className="modal fade text-dark" id="contactModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Contact Us</h5>
                                <button className="close" data-dismiss="modal">
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="message">Message</label>
                                        <textarea className="form-control"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary btn-block">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
