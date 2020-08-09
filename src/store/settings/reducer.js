import { settingsTypes } from './settingsTypes';

const initialState = {
    darkMode: true,
    screen: 'home',
    celsius: true,
};

const settingsReducer = (state = initialState, action) => {
    let tempFavCities = 0
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