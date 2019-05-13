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
              />
            </Cell>
          </Grid>
        </div>
      )
    };
}

export default LandingPage;