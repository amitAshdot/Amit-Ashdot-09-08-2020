import { weatherTypes } from './weatherTypes';
import jsonForecast from '../../dataMoc/forecast.json'
import jsonCurrent from '../../dataMoc/current.json'

const initialState = {
    isDayTime: true,
    currentCityKey: null,
    currentCityName: "",
    weatherIcon: 21,
    weatherText: "",
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

        case weatherTypes.FETCH_START:
            return { ...state, loading: true }

        case weatherTypes.FETCH_FAIL:
            return { ...state, loading: false, error: action.error }


        case weatherTypes.FETCH_WEATHER_SUCCESS:
            return { ...state, loading: false, searchArr: action.weather, isDayTime: action.weather[0].IsDayTime, weatherIcon: action.weather[0].WeatherIcon, weatherText: action.weather[0].WeatherText }

        case weatherTypes.FETCH_FORECAST_SUCCESS:
            return { ...state, loading: false, forecast: action.forecast }

        case weatherTypes.FETCH_AUTOCOMPLETE_SUCCESS:
            return { ...state, loading: false, autoCompleteList: action.autoCompleteList }
        case weatherTypes.CLEAR_AUTOCOMPLETE:
            return { ...state, userSearchInput: "", autoCompleteList: [] }

        case weatherTypes.FETCH_GEO_LOCATION_SUCCESS:
            return { ...state, loading: false, currentCityName: action.cityName, currentCityKey: action.cityKey }


        default:
            return { ...state };
    }

}
export default weatherReducer;