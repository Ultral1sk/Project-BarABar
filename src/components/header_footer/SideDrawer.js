import React from 'react'
import SwipeableDrawer  from '@material-ui/core/SwipeableDrawer';
import PropTypes from 'prop-types';
import List             from '@material-ui/core/List';
import ListItem         from '@material-ui/core/ListItem'
import MenuIcon   from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

const buttonWrapper = {
    textAlign : 'right',
    padding   : '1.5rem 2.45rem 0 0'
}

const listStyle = {
    backgroundColor : 'none !important',
    height      : '100vh',
    margin      : '0 auto',
    paddingTop  : '5rem'
}


const SideDrawer = (props) => {
    console.log(`click from children component`)
    return (
            <SwipeableDrawer
                anchor="top"
                open={props.open}
                style={{textAlign : 'center'}}
            >
            <div style={{...buttonWrapper}}>
                <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={(value) => props.onClose(false)}
                    >
                        <MenuIcon />
                    </IconButton>
            </div>
               

                <List component="nav" style={{...listStyle}}>
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

SwipeableDrawer.propTypes = {
    name : PropTypes.func.isRequired
};

export default SideDrawer
