import React,{ Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './Projects/Home/App.css';
import  Home  from "./Projects/Home/Home"
import Looplab from "./Projects/LoopLab_Social_Theme/Looplab";

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path = "/" render = {() => (
              <Home/>
          )}
          />

          <Route exact path = "/Looplab" render = {() => (
              <Looplab/>
          )}
          />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
