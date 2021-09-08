import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import About from './About'
import Contact from './Contact'
import AddExperience from './crud/AddExperience';
import UpdateExperience from './crud/UpdateExperience';
import Home from './Home'
import Portfolio from './Portfolio'
import Services from './Services'
import "./style.css"

const Main = () => {
    return (
        <Router>
        <div>
            <nav class="navbar">
                        <ul>
                            <li> <NavLink exact to="/">Home </NavLink> </li>
                            <li> <NavLink to="/about"> About Me </NavLink> </li>
                            <li><NavLink to="/portfolio"> Portfolio </NavLink> </li>
                            <li><NavLink to="/services"> Services </NavLink> </li>
                            <li><NavLink to="/contact"> Contact Me </NavLink> </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/addexperience">
                            <AddExperience/>
                        </Route>
                        <Route path="/updateexperience">
                            <UpdateExperience/>
                        </Route>
                        <Route path="/portfolio">
                            <Portfolio/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        
                        <Route path="/services">
                            <Services/>
                        </Route>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                        
                    </Switch>
        </div>
        </Router>
    )
}

export default Main
