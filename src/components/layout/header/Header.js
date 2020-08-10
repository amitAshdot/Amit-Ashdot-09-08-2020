import React from 'react'
import HeaderNav from './HeaderNav';
import HeaderSettings from './HeaderSettings';
import { Paper } from '@material-ui/core';

const Header = () => {
    return (
        <Paper>
            <div className="header">
                <p className="header__logo">Weather-app</p>
                <HeaderSettings />
                <HeaderNav />
            </div>
        </Paper>
    )
}

export default Header
