import React from 'react';
import './App.css';
// React-MDL imports
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl'; 
import { Link } from 'react-router-dom';

import Main from './components/Main';

function App() {
  return (
    <div className="">
        <Layout>
            <Header className="header-color" title="Ashish Garg" scroll>
                <Navigation>
                  <Link to="/about">About</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Ashish Garg">
                <Navigation>
                  <Link to="/about">About</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
              <Main />
            </Content>
        </Layout>
    </div>
  );
}

export default App;
