import { weatherTypes } from './weatherTypes'
import axios from 'axios';
import { url, key } from '../../util/api'
import autocompleteList from '../../dataMoc/autoComplete.json'

export const setCity = (cityKey, cityName) => {
    return async dispatch => {
        dispatch(setCityKey(Number(cityKey)))
        dispatch(setCityName(cityName))
    }
}
export const getAutoComplete = (autoCompleteText) => {
    return async dispatch => {
        dispatch(autoCompleteStart())
        try {
            const res = await axios.get(`${url}/locations/v1/cities/autocomplete?apikey=${key}&q=${autoCompleteText}`);
            await dispatch(autoCompleteSuccess(res.data))
        } catch (error) {
            autoCompleteFailed(error)
        }
    }
}

export const fetchWeather = (cityKey) => {
    return async dispatch => {
        dispatch(autoCompleteStart())
        try {
            const res = await axios.get(`${url}/currentconditions/v1/${cityKey}?apikey=${key}`);
            await dispatch(fetchWeatherSuccess(res.data))
        } catch (error) {
            autoCompleteFailed(error)
        }
    }
}

export const fetchForecast = (cityKey) => {
    return async dispatch => {
        dispatch(autoCompleteStart())
        try {
            const res = await axios.get(`${url}/forecasts/v1/daily/5day/${cityKey}?apikey=${key}&metric=true`);
            await dispatch(forecastSuccess(res.data))
        } catch (error) {
            autoCompleteFailed(error)
        }
    }
}

export const forecastSuccess = (forecast) => {
    return {
        type: weatherTypes.FETCH_FORECAST_SUCCESS,
        forecast
    };
};

export const autoCompleteSuccess = (autoCompleteList) => {
    return {
        type: weatherTypes.FETCH_AUTOCOMPLETE_SUCCESS,
        autoCompleteList
    };
};
export const autoCompleteStart = () => {
    return { type: weatherTypes.FETCH_START, };
};
export const autoCompleteFailed = (error) => {
    return { type: weatherTypes.FETCH_FAIL, error };
};


export const fetchWeatherSuccess = (weather) => {
    return {
        type: weatherTypes.FETCH_WEATHER_SUCCESS,
        weather
    };
};

export const setInput = (input) => {
    return {
        type: weatherTypes.SET_INPUT,
        input
    };
};

export const setCityKey = (cityKey) => {
    return {
        type: weatherTypes.SET_CITY_KEY,
        cityKey
    };
};

export const setCityName = (cityName) => {
    return {
        type: weatherTypes.SET_CITY_NAME,
        cityName
    };
};

export const clearAutoComplete = () => {
    return {
        type: weatherTypes.CLEAR_AUTOCOMPLETE,
    }
}



// Geo location
export const fetchGeoSuccess = (data) => {
    debugger
    let cityName = data.EnglishName, cityKey = data.Key
    return {
        type: weatherTypes.FETCH_GEO_LOCATION_SUCCESS,
        cityName,
        cityKey
    };
};

export const geoApi = (latitude, longitude) => {
    return async dispatch => {
        dispatch(autoCompleteStart())
        try {
            const res = await axios.get(
                `${url}/locations/v1/cities/geoposition/search?apikey=${key}&q=${latitude}%2C${longitude}`
            );
            await dispatch(fetchGeoSuccess(res.data))
        } catch (error) {
            autoCompleteFailed(error)
        }
    }
}