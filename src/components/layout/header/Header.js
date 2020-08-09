import React from 'react'
import HeaderNav from './HeaderNav';

const Header = () => {
    return (
        <div className="header">
            <p className="header__logo">Weather-app</p>
            <HeaderNav />
        </div>
    )
}

export default Header
