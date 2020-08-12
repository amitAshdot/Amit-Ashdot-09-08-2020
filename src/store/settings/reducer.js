import { settingsTypes } from './settingsTypes';

const initialState = {
    darkMode: true,
    screen: 'home',
    celsius: true,
    path: '',
    colorsMap: {
        primary: "#505867",
        primaryLight: "#667083",
        primaryDark: "#282c34",
        secondaryLight: "#2998ff",
        secondaryDark: "#5643fa",

        darkModePrimary: "#505867",
        darkModePrimaryLight: "#667083",
        darkModePrimaryDark: "#282c34",
        darkModeSecondaryLight: "#2998ff",
        darkModeSecondaryDark: "#5643fa",
    }
};

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case settingsTypes.TOGGLE_LIGHT:
            return { ...state, darkMode: action.darkMode }

        case settingsTypes.TOGGLE_CELSIUS:
            return { ...state, celsius: action.celsiusMode }
        default:
            return { ...state };
    }

}
export default settingsReducer;