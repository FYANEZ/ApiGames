import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';


const Header = () => (
    <AppBar position="sticky">
        <Toolbar>
          
            &nbsp; &nbsp;
            <h1>Video juegos</h1>
        </Toolbar>
    </AppBar>
);

Header.displayName = 'Header';

export default Header;