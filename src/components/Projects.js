import React from 'react';
import { Tabs, Tab, Grid, Cell, 
    Card, CardTitle, CardActions, 
    Button, 
    // CardMenu, IconButton, 
    CardText } from 'react-mdl';

export class Projects extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         activeTab: 0
      }
    }

    // Add more if statements if deciding to separate into multiple categories
    _toggleCategories = () => {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    {/* PROJECT - Nu.Trac */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(/images/Nutrac.png) center / cover'}}>Nu.Trac</CardTitle>
                        <CardText>
                            A nutritional web application that provides a detailed recipe along with nutritional 
                            information based on the user’s dietary preferences and mealtime.
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/mragarg/nu-trac">GitHub</Button>
                            <Button colored href="https://nutrac.ashishgarg.dev/">Live Demo</Button>
                        </CardActions>
                        {/* Not needed. Not implementing a share button. */}
                        {/* <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>

                    {/* Project - PawPii */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(/images/PawPii.png) center / cover'}}>PawPii</CardTitle>
                        <CardText>
                            An adoption website utilizing a database (Postgres) to display puppies for adoption at local shelters. Shelters are able to manage 
                            their catalog by adding and removing puppies.
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/mragarg/week9-backend-project">GitHub</Button>
                            <Button colored href="https://pawpii.ashishgarg.dev/">Live Demo</Button>
                        </CardActions>
                    </Card>

                    {/* Project - PyGame Monster Game */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(/images/MonsterGame.png) center / cover'}}>Monster Game</CardTitle>
                        <CardText>
                            A Catch the Monster game in which the user is required to apprehend a monster while avoid being captured by goblins.
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/mragarg/monster-game-python">GitHub</Button>
                        </CardActions>
                    </Card>
                </div>

                
            );
        }
    }


    render() {
        return (
        <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => {
                this.setState({
                    activeTab: tabId
                });
            }} ripple>
                <Tab>Projects</Tab>
            </Tabs>

            <Grid >
                <Cell col={12}>
                    <div className="content">{this._toggleCategories()}</div>
                </Cell>
            </Grid>
        </div>
        )
    };
}

export default Projects;
