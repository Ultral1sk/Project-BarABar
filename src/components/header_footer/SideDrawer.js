import React from 'react'
import SwipeableDrawer  from '@material-ui/core/SwipeableDrawer';
import List             from '@material-ui/core/List';
import ListItem         from '@material-ui/core/ListItem'

const SideDrawer = (props) => {
    return (
            <SwipeableDrawer
                anchor="top"
             
                open={props.open}
                onClose={() => props.onClose(false)}
            >
                <List component="nav">
                    <ListItem button onClick={() => console.log('Home')}>
                        Home
                    </ListItem>

                    <ListItem button onClick={() => console.log('About')}>
                        About us
                    </ListItem>

                    <ListItem button onClick={() => console.log('Contact Info')}>
                        Contact 
                    </ListItem>

                    <ListItem button onClick={() => console.log('Pricing')}>
                        Pricing 
                    </ListItem>

                    <ListItem button onClick={() => console.log('Location')}>
                        Location 
                    </ListItem>
                </List>
            </SwipeableDrawer>
    
    )
}

export default SideDrawer
