import React from 'react';
import {Grid, Cell } from 'react-mdl';

export class LandingPage extends React.Component {
    render() {
      return (
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <img 
                src="https://png.pngtree.com/svg/20170128/avatar_indian_man_beard_779480.png"
                alt="Avatar"
                className="avatar-img"
              />

              <div className="banner-text">
                <h1>Software Engineer</h1>
                <hr/>
                <p> Java | React | HTML/CSS | Bootstrap | Postgres | C++ | Node | ES6 | Python </p>
                <div className="social-links">
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/mragarg/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                  </a>
                  {/* GitHub */}
                  <a href="https://github.com/mragarg" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github-square"  aria-hidden="true" />
                  </a>

                </div>
              </div>
            </Cell>
          </Grid>
        </div>
      )
    };
}

export default LandingPage;