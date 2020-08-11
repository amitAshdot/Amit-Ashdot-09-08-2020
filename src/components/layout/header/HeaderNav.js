import React from 'react'
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <div className="header__nav">
            <ul className="header__nav__ul">
                <li className="header__nav__ul--li">
                    <Link to='/'><button >Home</button></Link>
                </li>
                <li className="header__nav__ul--li">
                    <Link to='/favorites'><button >Favorite</button></Link>
                </li>
            </ul>
        </div>
    )
}

export default HeaderNav
