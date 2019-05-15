import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

export class Contact extends React.Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">

                    <Cell col={6}>
                        <h2>Ashish Garg</h2>
                        <img 
                            src="/images/avatar.png"
                            alt="Avatar"
                            style={{height: '250px'}}
                        />
                        {/* <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p> */}
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                            <div className="contact-list">
                                <List>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                            <i className="fa fa-phone-square" aria-hidden="true"/>
                                             (770) 757-7034
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                            <i className="fa fa-envelope" aria-hidden="true"/>
                                             mragarg@gmail.com
                                        </ListItemContent>
                                    </ListItem>
                                </List>
                            </div>   
                    </Cell>

                </Grid>
            </div>
        )
    };
}

export default Contact;
