import React,{ Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './Projects/Home/App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCheck, faArrowRight, faEnvelopeOpen, faArrowCircleDown, faUser, faEnvelope, faPencilAlt,
    faCog, faCloud, faCartPlus, faPlay, faBuilding, faBullhorn, faComments, faBox, faCreditCard, faCoffee } from '@fortawesome/free-solid-svg-icons'
import  Home  from "./Projects/Home/Home"
import Looplab from "./Projects/LoopLab_Social_Theme/Looplab";
import Mizuxe from "./Projects/Mizuxe_Book_Theme/Mizuxe";
import Glozzom from "./Projects/Glozzom_Multi_Page_Theme/Glozzom";

library.add(fab, faCheckSquare, faCheck, faArrowRight, faEnvelopeOpen, faArrowCircleDown,
    faFacebook, faInstagram, faTwitter, faUser, faEnvelope, faPencilAlt, faCog, faCloud, faCartPlus, faPlay,
    faBuilding, faBullhorn, faComments, faBox, faCreditCard, faCoffee);

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

                <Route exact path = "/Glozzom" render = {() => (
                    <Glozzom/>
                )}
                />
            </BrowserRouter>
        )
    }
}

export default App;
