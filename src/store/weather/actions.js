import { weatherTypes } from './weatherTypes'

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
    return {
        type: weatherTypes.SET_INPUT,
        input
    };
};
