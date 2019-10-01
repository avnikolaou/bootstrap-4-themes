import React,{ Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './Projects/Home/App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCheck, faArrowRight, faEnvelopeOpen, faArrowCircleDown, faUser, faEnvelope, faPencilAlt,
    faCog, faCloud, faCartPlus, faPlay, faBuilding, faBullhorn, faComments, faBox, faCreditCard, faCoffee, faUserTimes,
    faUserCircle, faAngleDoubleRight, faFolder, faUsers, faPen, faArrowLeft, faLock, faTrash } from '@fortawesome/free-solid-svg-icons'
import  Home  from "./Projects/Home/Home"
import Looplab from "./Projects/LoopLab_Social_Theme/Looplab";
import Mizuxe from "./Projects/Mizuxe_Book_Theme/Mizuxe";
import Glozzom from "./Projects/Glozzom_Multi_Page_Theme/Glozzom";
import Blogen from "./Projects/Blogen/Blogen";
import Portfolio from "./Projects/Portfolio/Portfolio";

library.add(fab, faCheckSquare, faCheck, faArrowRight, faEnvelopeOpen, faArrowCircleDown,
    faFacebook, faInstagram, faTwitter, faUser, faEnvelope, faPencilAlt, faCog, faCloud, faCartPlus, faPlay,
    faBuilding, faBullhorn, faComments, faBox, faCreditCard, faCoffee, faUserTimes, faUserCircle, faAngleDoubleRight,
    faFolder, faUsers, faPen, faArrowLeft, faLock, faTrash);

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

                <Route exact path = "/Blogen" render = {() => (
                    <Blogen/>
                )}
                />

                <Route exact path = "/Portfolio" render = {() => (
                    <Portfolio/>
                )}
                />
            </BrowserRouter>
        )
    }
}

export default App;
