import React, { Component } from 'react'

class Footer extends Component {

    render() {
        return (
            <footer id="main-footer" className="text-center p-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p>Copyright &copy;<span id="year"></span> Glozzom</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
