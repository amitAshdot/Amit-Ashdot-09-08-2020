

import { settingsTypes } from './settingsTypes'

export const setLightMode = (darkMode) => {
    return {
        type: settingsTypes.TOGGLE_LIGHT,
        darkMode
    };
};

export const setCelsiusMode = (celsiusMode) => {
    return {
        type: settingsTypes.TOGGLE_CELSIUS,
        celsiusMode
    };
};