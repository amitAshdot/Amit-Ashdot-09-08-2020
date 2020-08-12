import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HeaderNav = () => {
    const settings = useSelector(state => state.settingsReducer);
    const modeClass = settings.darkMode ? "mode--dark--nav" : ""
    return (
        <div className="header__nav">
            <ul className="header__nav__ul">
                <li className="header__nav__ul__li">
                    <Link to='/' className={`header__nav__ul__li-a ${modeClass}`}  >
                        Home
                    </Link>
                </li>
                <li className="header__nav__ul__li">
                    <Link to='/favorites' className={`header__nav__ul__li-a ${modeClass}`} >
                        Favorite
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default HeaderNav
