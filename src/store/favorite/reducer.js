
import { favoriteTypes } from './favoriteTypes';

const initialState = {
    favCities: [],
};

const weatherReducer = (state = initialState, action) => {
    let tempFavCities = 0
    switch (action.type) {

        case favoriteTypes.GET_FAVORITE:
            return { ...state, favCities: action.allData }

        case favoriteTypes.ADD_FAVORITE:
            return { ...state, favCities: action.tempArr }

        case favoriteTypes.REMOVE_FAVORITE:
            return { ...state, favCities: action.tempArr }

        default:
            return { ...state };
    }

}
export default weatherReducer;