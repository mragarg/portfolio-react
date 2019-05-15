import React from 'react';
import { Grid, Cell } from 'react-mdl';

import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

export class AboutMe extends React.Component {
    render() {
        return (
            <div>
            <Grid>
              <Cell col={4}>
                <div style={{textAlign: 'center'}}>
                  <img
                    src="/images/avatar.png"
                    alt='Avatar'
                    style={{height: '200px'}}
                    />
                </div>
  
                <h2 style={{paddingTop: '1em'}}>
                  Ashish Garg
                </h2>
                <h4 style={{color: 'grey'}}>
                  Software Engineer
                </h4>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <p>Currently, I am an undergraduate student at the University of Georgia pursuing three degrees in Computer Science, Psychology, and Biology. 
                    Although it typically takes 7 years to complete, I am obtaining my degrees a little over 6 years, as I am driven and hard-working. I believe 
                    it is advantageous that the three degrees differ from one another because it further portrays my versatility and adaptability. With my 
                    work experience thus far, I have gained great interpersonal communication skills, as well as refined my methods in providing the best service 
                    to clients. I have experience with Java, JavaScript, C++, and UNIX coding languages. If you would like to learn more about how my services can 
                    help your company, please reach out via email.</p>
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

export default AboutMe;
