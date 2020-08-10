import { weatherTypes } from './weatherTypes';
import jsonForecast from '../../dataMoc/forecast.json'
import jsonCurrent from '../../dataMoc/current.json'

const initialState = {
    currentCityKey: 215854,
    currentCityName: "",
    weatherIcon: 21,
    searchArr: [
        jsonCurrent
    ],
    fetchSearch: true,
    forecast: jsonForecast,
    favCities: [215854,],
    userSearchInput: "",
    autoCompleteList: [],
    loading: false

};

const weatherReducer = (state = initialState, action) => {
    let tempFavCities = 0
    switch (action.type) {

        case weatherTypes.SET_INPUT:
            return { ...state, userSearchInput: action.input }

        case weatherTypes.SET_CITY_KEY:
            return { ...state, currentCityKey: action.cityKey }

        case weatherTypes.SET_CITY_NAME:
            return { ...state, currentCityName: action.cityName }

        case weatherTypes.GET_AUTOCOMPLETE:
            return { ...state, autoCompleteList: action.newList }


        case weatherTypes.ADD_FAVORITE:
            tempFavCities = state.favCities
            tempFavCities.push(action.cityKey)
            return { ...state, favCities: tempFavCities }

        case weatherTypes.REMOVE_FAVORITE:
            tempFavCities = state.favCities.filter(city => city !== action.cityKey)
            return { ...state, favCities: tempFavCities }

        default:
            return { ...state };
    }

}
export default weatherReducer;