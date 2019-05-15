import React from 'react';
import { Grid, Cell } from 'react-mdl';

import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

export class Resume extends React.Component {
    render() {
      return (
        <div>
          <Grid>
            <Cell col={4}>
              <div style={{textAlign: 'center'}}>
                <img
                  src="https://png.pngtree.com/svg/20170128/avatar_indian_man_beard_779480.png"
                  alt='Avatar'
                  style={{height: '200px'}}
                  />
              </div>

              <h2 style={{paddingTop: '2em'}}>
                Ashish Garg
              </h2>
              <h4 style={{color: 'grey'}}>
                Software Engineer
              </h4>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <h5>Phone</h5>
              <p>(770) 757-7034</p>
              <h5>Email</h5>
              <p>mragarg@gmail.com</p>
              <h5>Website</h5>
              <p>ashishgarg.dev</p>
            </Cell>
            <Cell className="resume-right-col" col={8}>
              <h2>Education</h2>
              <Education
                startDate='August 2013'
                endDate=' December 2019'
                schoolName='University of Georgia'
                schoolDescription='Bachelors of Science (B.S.) in Biology, Psychology, and Computer Science'
              />
              <Education
                startDate='February 2019'
                endDate='June 2019'
                schoolName='DigitalCrafts Bootcamp'
                schoolDescription='Software Engineer Certificate'
              />

              <hr style={{borderTop: '3px solid #e22947'}}/>

              <h2>Experience</h2>
              <Experience 
                startDate='June 2013'
                endDate=' July 2018'
                jobName='Doraville Package Store'
                jobTitle='Shift Manager'
                jobDescription='Improved customer experience by delivering a unique customer experience during sales and transactions as well as managed staff schedules to maximize productivity'
              />
              <Experience 
                startDate='February 2019'
                endDate=' June 2019'
                jobName='DigitalCrafts'
                jobTitle='Student Software Engineer'
                jobDescription='NEED TO COMPLETE'
              />

              <hr style={{borderTop: '3px solid #e22947'}}/>

              <h2>Skills</h2>
              <Skills skill='Java'/>
              <Skills skill='Python'/>
              <Skills skill='HTML/CSS'/>
              <Skills skill='Bootstrap'/>
              <Skills skill='Postgres'/>
              <Skills skill='React'/>
              <Skills skill='Node'/>
              <Skills skill='Express'/>
              <Skills skill='ES6'/>
            </Cell>
          </Grid>
        </div>
      )
    };
}

export default Resume;
