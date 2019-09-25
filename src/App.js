import React,{ Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './Projects/Home/App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCheck, faArrowRight, faEnvelopeOpen, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import  Home  from "./Projects/Home/Home"
import Looplab from "./Projects/LoopLab_Social_Theme/Looplab";
import Mizuxe from "./Projects/Mizuxe_Book_Theme/Mizuxe";

library.add(fab, faCheckSquare, faCheck, faArrowRight, faEnvelopeOpen, faArrowCircleDown);

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

          <Route exact path = "/Mizuxe" render = {() => (
              <Mizuxe/>
          )}
          />
      </BrowserRouter>
    )
  }
}

export default App;
