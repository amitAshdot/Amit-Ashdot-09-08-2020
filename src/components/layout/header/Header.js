import React from 'react'
import HeaderNav from './HeaderNav';
import HeaderSettings from './HeaderSettings';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

const Header = () => {
    let history = useHistory()

    const settings = useSelector(state => state.settingsReducer);
    const modeClass = settings.darkMode ? "mode--dark--header" : ""
    return (
        <div className={`header ${modeClass}`}>
            <p className="header__logo" onClick={() => history.push('/')}>Weather-app</p>
            <HeaderSettings />
            <HeaderNav />
        </div>
    )
}

export default Header
