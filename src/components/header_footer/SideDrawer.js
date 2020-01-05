import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'



const listStyle = {
    display: 'flex',
    paddingLeft : '3rem'
}

const closeButton = {
    paddingLeft: '25rem'
}



const SideDrawer = (props) => {
    console.log(`click from children component`)
    return (
        <SwipeableDrawer
            anchor="top"
            open={props.open}

        >
            <List component="nav" style={{ ...listStyle }}>
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
                    Gallery & Menu
                    </ListItem>

                <ListItem button onClick={() => console.log('Location')}>
                    Location
                    </ListItem>

                <ListItem style={{...closeButton}}>

                    <IconButton
                   
                        aria-label="Menu"
                        color="white"
                        onClick={(value) => props.onClose(false)}
                    >
                        <CloseIcon  />
                    </IconButton>

                </ListItem>
            </List>
        </SwipeableDrawer>

    )
}

SwipeableDrawer.propTypes = {
    name: PropTypes.func.isRequired
};

export default SideDrawer
