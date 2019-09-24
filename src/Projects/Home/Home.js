import React,{ Component } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

class Home extends Component{

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <Link to={"/Looplab"}>LoopLab</Link>
            </p>
          </header>
        </div>
    );
  }
}

export default Home;
