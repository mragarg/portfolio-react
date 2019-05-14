import React from 'react';
import { Tabs, Tab, Grid, Cell, 
    Card, CardTitle, CardActions, 
    Button, CardMenu, IconButton, CardText } from 'react-mdl';

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
                <div>
                    {/* PROJECT - Nu.Trac */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Nu.Trac</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    {/* Not needed. Not implementing a share button. */}
                    {/* <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu> */}
                </Card>
                {/* Project - PawPii */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>PawPii</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                </Card>
                {/* Project - PyGame Monster Game */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Monster Game</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    {/* Not needed. Not implementing a share button. */}
                    {/* <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu> */}
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

            <section className="projects-grid">
            <Grid className="projects-grid">
                <Cell col={12}>
                    <div className="content">{this._toggleCategories()}</div>
                </Cell>
            </Grid>
            </section>
        </div>
        )
    };
}

export default Projects;
