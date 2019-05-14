import React from 'react';
import { Tabs, Tab } from 'react-mdl';

export class Projects extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         activeTab: 0
      }
    }

    _toggleCategories = () => {
        if(this.state.activeTab === 0){
            return(
                <div>
                   <h1>This is React</h1>
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
                {this._toggleCategories()}
            </section>
        </div>
        )
    };
}

export default Projects;
