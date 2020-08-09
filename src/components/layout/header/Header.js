import React from 'react'
import HeaderNav from './HeaderNav';
import HeaderSettings from './HeaderSettings';

const Header = () => {
    return (
        <div className="header">
            <p className="header__logo">Weather-app</p>
            <HeaderSettings />
            <HeaderNav />
        </div>
    )
}

export default Header
