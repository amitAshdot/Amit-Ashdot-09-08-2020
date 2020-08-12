
import { favoriteTypes } from './favoriteTypes'
import axios from 'axios';
import { url } from '../../util/api'

export const fetchFavorite = (favList) => {
    return async dispatch => {
        dispatch(fetchStart())
        try {
            const promises = favList.map((key, i) => {
                return axios.get(`${url}/currentconditions/v1/${key.cityKey}?apikey=469JvPBAURNrUJpoUy7bnbjJXn4uvab5`)
            });
            await Promise.all(promises).then((res) => {
                dispatch(fetchSuccess(res, favList))
            });
        } catch (error) {
            fetchFail(error)
        }
    }
};

export const fetchStart = () => {
    return { type: favoriteTypes.FETCH_FAVORITE_START }
};
export const fetchSuccess = (allData, localStorage) => {

    let finaleData = []
    for (let i = 0; i < localStorage.length; i++) {
        let temp = { ...allData[i].data[0], ...localStorage[i] };
        finaleData.push(temp)
    }
    return { type: favoriteTypes.FETCH_FAVORITE_SUCCESS, finaleData }
};
export const fetchFail = () => {
    return { type: favoriteTypes.FETCH_FAVORITE_FAIL }
};
export const initFav = () => {
    localStorage.setItem("favList", []);
};

export const addFav = (favList, cityKey, cityName) => {
    let tempArr = [...favList];
    tempArr.push({ cityKey: cityKey, cityName: cityName })
    localStorage.setItem("favList", JSON.stringify(tempArr));
    return {
        type: favoriteTypes.ADD_FAVORITE,
        tempArr
    };
};

export const removeFav = (favList, cityKey) => {
    let tempArr = [...favList];
    tempArr = tempArr.filter(city => city.cityKey !== cityKey)
    localStorage.setItem("favList", tempArr);
    return {
        type: favoriteTypes.REMOVE_FAVORITE,
        tempArr
    };
};