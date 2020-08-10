import { weatherTypes } from './weatherTypes'

import autocompleteList from '../../dataMoc/autoComplete.json'

export const getAutoComplete = (autoCompleteText) => {

    // fetch.....
    const autoCompleteList = autocompleteList

    const newList = autoCompleteList.filter(local => {
        return local.LocalizedName.toLowerCase().includes(autoCompleteText.toLowerCase())
    })
    return {
        type: weatherTypes.GET_AUTOCOMPLETE,
        newList
    };
};

export const addFav = (cityKey) => {
    return {
        type: weatherTypes.ADD_FAVORITE,
        cityKey
    };
};

export const removeFav = (cityKey) => {
    return {
        type: weatherTypes.REMOVE_FAVORITE,
        cityKey
    };
};

export const setInput = (input) => {
    debugger
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
