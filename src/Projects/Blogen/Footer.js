import React, { Component } from 'react'

class Footer extends Component {

    getYear() {
        return new Date().getFullYear();
    }

    render() {
        return (
            <footer id="main-footer" className="text-center p-4">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p>Copyright &copy; <span id="year"></span>{this.getYear()} Blogen</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
