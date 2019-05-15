import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

export default function Main() {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={() => {
                window.location.href = 'https://drive.google.com/file/d/1VK2BY0yyTcMtizKBS3NUq33F64JQqIvk/view?usp=sharing';
                return null;
            }} />
        </Switch>
    );
}
