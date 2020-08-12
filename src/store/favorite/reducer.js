
import { favoriteTypes } from './favoriteTypes';

const initialState = {
    favCitiesKey: [],
    favCities: [],
    loading: false
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case favoriteTypes.FETCH_FAVORITE_SUCCESS:
            return { ...state, favCities: action.finaleData, loading: false }
        case favoriteTypes.FETCH_FAVORITE_START:
            return { ...state, loading: true }

        case favoriteTypes.FETCH_FAVORITE_FAIL:
            return { ...state, loading: false }


        case favoriteTypes.ADD_FAVORITE:
            return { ...state, favCitiesKey: action.tempArr }

        case favoriteTypes.REMOVE_FAVORITE:
            return { ...state, favCitiesKey: action.tempArr }

        default:
            return { ...state };
    }

}
export default weatherReducer;