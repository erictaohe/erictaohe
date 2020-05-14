import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Experience from './Experience'

const Main = () => (
    <Switch> 
        <Route exact path="/" component = {LandingPage} />
        <Route exact path="/aboutme" component = {AboutMe} />
        <Route exact path="/Resume" component = {Resume} />
        <Route exact path="/Experience" component = {Experience} />
        <Route exact path="/contact" component = {Contact} />
    </Switch>
)

export default Main;