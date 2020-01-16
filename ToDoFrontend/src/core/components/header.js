import React from 'react';
import { Toolbar, AppBar, IconButton, Typography } from '@material-ui/core';
import Flight from '@material-ui/icons/Flight';
import './header.scss';
const Header = () => {
    return(
           <header className="root">
            <AppBar style = {{background: "#373737"}} position="static">
            <Toolbar className="row">
            <div className="col-6 px-4 py-2 header-wrapper">
              <IconButton className="menuButton" edge="start" color="inherit">
                <Flight />
              </IconButton>
              <Typography id="myflight-text" className="title" variant="h6" noWrap>
            MyToDoList
          </Typography>
          </div>
            </Toolbar>
            </AppBar>
          </header>
    )
}
export default Header;