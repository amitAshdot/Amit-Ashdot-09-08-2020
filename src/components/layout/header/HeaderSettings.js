import React from 'react'
import DarkModeIcon from '../../ui/icons/DarkModeIcon';
import { useSelector, useDispatch } from 'react-redux';
import { setLightMode, setCelsiusMode } from '../../../store/settings/actions'
const HeaderSettings = () => {
    const settings = useSelector(state => state.settingsReducer);
    const dispatch = useDispatch();

    const modeClass = settings.darkMode ? "--dark" : ""
    const toggleDarkMode = () => {
        settings.darkMode ? dispatch(setLightMode(false)) :
            dispatch(setLightMode(true))
    }

    const toggleCelsiusMode = () => {
        settings.celsius ? dispatch(setCelsiusMode(false)) :
            dispatch(setCelsiusMode(true))
    }

    const activeCelsius = settings.celsius ? "--active" : ''
    const activeFahrenheit = !settings.celsius ? "--active" : ''

    return (
        <div className={`header__settings mode${modeClass}`} >
            <div className="header__settings__type" onClick={toggleCelsiusMode}>
                <h3 className={`header__settings__type${activeCelsius}`}>&deg;C</h3>
                <h3 className={`header__settings__type${activeFahrenheit}`}>&deg;F</h3>
            </div>
            <div className="header__settings__dark-mode">
                <DarkModeIcon clicked={toggleDarkMode} dark={settings.darkMode} />
            </div>

        </div>
    )
}

export default HeaderSettings
