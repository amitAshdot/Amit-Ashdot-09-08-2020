import { weatherTypes } from './weatherTypes';
import jsonForecast from '../../dataMoc/forecast.json'
import jsonCurrent from '../../dataMoc/current.json'

const initialState = {
    currentCityKey: 215854,
    weatherIcon: 21,
    searchArr: [
        jsonCurrent
    ],
    fetchSearch: true,
    forecast: jsonForecast,
    favCities: [215854,],
    userSearchInput: "",
};

const weatherReducer = (state = initialState, action) => {
    let tempFavCities = 0
    switch (action.type) {
        case weatherTypes.BUILD:

            break;

        case weatherTypes.ADD_FAVORITE:
            tempFavCities = state.favCities
            tempFavCities.push(action.cityKey)
            return { ...state, favCities: tempFavCities }

        case weatherTypes.REMOVE_FAVORITE:
            tempFavCities = state.favCities.filter(city => city !== action.cityKey)
            return { ...state, favCities: tempFavCities }

        case weatherTypes.SET_INPUT:

            return { ...state, userSearchInput: action.input }

        default:
            return { ...state };
    }

}
export default weatherReducer;