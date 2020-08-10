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
    userSearchInput: "",
    autoCompleteList: [],
    loading: false,
    error: ""
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {

        case weatherTypes.SET_INPUT:
            return { ...state, userSearchInput: action.input }

        case weatherTypes.SET_CITY_KEY:
            return { ...state, currentCityKey: action.cityKey }

        case weatherTypes.SET_CITY_NAME:
            return { ...state, currentCityName: action.cityName }

        case weatherTypes.FETCH_AUTOCOMPLETE_SUCCESS:
            console.log(action.autoCompleteList)
            return { ...state, loading: false, autoCompleteList: action.autoCompleteList }

        case weatherTypes.FETCH_AUTOCOMPLETE_START:

            return { ...state, loading: true }


        case weatherTypes.FETCH_AUTOCOMPLETE_FAIL:
            return { ...state, loading: false, error: action.error }

        default:
            return { ...state };
    }

}
export default weatherReducer;