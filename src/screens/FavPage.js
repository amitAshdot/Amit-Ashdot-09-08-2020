import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { checkDay } from '../util/functions';
import FavCityItem from '../components/layout/favoritePage/favCityItem.js'
import { getFavorite } from '../store/favorite/actions'
const FavPage = () => {
    const favorite = useSelector(state => state.favoriteReducer);
    const dispatch = useDispatch();

    const { favCities } = favorite;
    const map = favCities.length > 0 ? favCities.map((item, i) => {
        // return <FavCityItem weekday={weekday} minTemp={item.Temperature.Minimum.Value} key={i} />
        return <FavCityItem item={item} key={i} />
    }) : null


    useEffect(() => {
        dispatch(getFavorite())
        console.log(favorite.favCities)
    }, [favorite.favCities])
    return (
        <div className="favorite">
            {map}
        </div>
    )
}

export default FavPage
