
import { favoriteTypes } from './favoriteTypes'
import axios from 'axios';
import { url } from '../../util/api'

export const getFavorite = (favList) => {
    const promises = favList.map(key => axios.get(`${url}/currentconditions/v1/${key}?apikey=469JvPBAURNrUJpoUy7bnbjJXn4uvab5`));
    const allData = Promise.all(promises).then(allOfTheData => console.log(allOfTheData));

    return {
        type: favoriteTypes.GET_FAVORITE,
        allData
    }
};

export const initFav = () => {
    localStorage.setItem("favList", []);
};

export const addFav = (favList, cityKey) => {
    let tempArr = [...favList];
    tempArr.push(cityKey)
    localStorage.setItem("favList", tempArr);
    return {
        type: favoriteTypes.ADD_FAVORITE,
        tempArr
    };
};

export const removeFav = (favList, cityKey) => {
    let tempArr = [...favList];
    tempArr = tempArr.filter(city => city !== cityKey)
    localStorage.setItem("favList", tempArr);
    return {
        type: favoriteTypes.REMOVE_FAVORITE,
        tempArr
    };
};