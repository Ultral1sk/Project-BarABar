import React, { Component } from 'react'
import AppBar     from '@material-ui/core/AppBar'
import Toolbar    from '@material-ui/core/Toolbar'
import MenuIcon   from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import SideDrawer from './SideDrawer'
import styled     from 'styled-components'



export class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            drawerOpen : false,
          
        }
}
    
    toggleDrawer = (value) => {
        this.setState({
            drawerOpen : value
        })
    }


    render() {
        console.log(`click from parrent component`);
        
        return (
            <div>
                <AppBar style={{
                    
                    background: 'transparent',
                    boxShadow: 'none'
                }}>
                        <Toolbar>
                            <div className="header_logo">
                                <div className="font_righteaouse header_logo_venue">BarABar</div>
                                <div className="header_logo_title">Musical Events</div>
                            </div>

                            <IconButton
                         
                                aria-label="Menu"
                                color="inherit"
                                onClick={() => this.toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>

                            <SideDrawer 
                                open={this.state.drawerOpen}
                                onClose={(value) => this.toggleDrawer(value)}
                            />                   
                            
                        </Toolbar>                      
                </AppBar>
            </div>
        )
    }
}

export default Header
