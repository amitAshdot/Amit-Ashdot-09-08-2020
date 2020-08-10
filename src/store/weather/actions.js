import { weatherTypes } from './weatherTypes'
import axios from 'axios';
import { url, key } from '../../util/api'
import autocompleteList from '../../dataMoc/autoComplete.json'

export const getAutoComplete = (autoCompleteText) => {
    return async dispatch => {
        dispatch(autoCompleteStart())
        try {
            const res = await axios.get(`${url}/locations/v1/cities/autocomplete?apikey=${key}&q=${autoCompleteText}`);
            autoCompletesuccess(res.data)
        } catch (error) {
            autoCompleteFailed(error)
        }
    }
}

export const autoCompletesuccess = (autoCompleteList) => {
    console.log(autoCompleteList)

    return {
        type: weatherTypes.FETCH_AUTOCOMPLETE_SUCCESS,
        autoCompleteList
    };
};
export const autoCompleteStart = () => {
    return { type: weatherTypes.FETCH_AUTOCOMPLETE_START, };
};
export const autoCompleteFailed = (error) => {
    return { type: weatherTypes.FETCH_AUTOCOMPLETE_START, error };
};

export const fetchWeather = (input) => {
    return {
        type: weatherTypes.SET_INPUT,
        input
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
