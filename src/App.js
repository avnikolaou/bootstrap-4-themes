import React,{ Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './Projects/Home/App.css';
import  Home  from "./Projects/Home/Home"
import Looplab from "./Projects/LoopLab_Social_Theme/Looplab";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCheck);

class App extends Component {

  render() {
    return (
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
    )
  }
}

export default App;
