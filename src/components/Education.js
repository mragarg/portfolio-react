import React from 'react';
import { Grid, Cell } from 'react-mdl';

export class Education extends React.Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startDate} - {this.props.endDate}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;
