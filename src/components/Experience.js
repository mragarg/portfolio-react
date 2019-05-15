import React from 'react';
import { Grid, Cell } from 'react-mdl';

export class Experience extends React.Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startDate} - {this.props.endDate}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
                    <h5 style={{marginTop: '0px'}}>{this.props.jobTitle}</h5>
                    <li>{this.props.jobDescription}</li>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;
