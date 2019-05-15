import React from 'react';
import { Grid, Cell } from 'react-mdl';

export class Skills extends React.Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div style={{display: 'flex', fontSize: '2vh', marginBottom: '0px'}}>
                        <li>
                            {this.props.skill}
                        </li>
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;
