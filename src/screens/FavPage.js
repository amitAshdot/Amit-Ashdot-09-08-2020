import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import FavCityItem from '../components/layout/favoritePage/favCityItem.js'
import { fetchFavorite } from '../store/favorite/actions'
import NoFavorites from '../components/ui/NoFavorites';

const FavPage = () => {
    const favorite = useSelector(state => state.favoriteReducer);
    const dispatch = useDispatch();
    const localStore = localStorage.getItem('favList')
    const favList = localStore ? JSON.parse(localStore) : []

    useEffect(() => {
        if (favList.length)
            dispatch(fetchFavorite(favList))
    }, [favorite.favList])
    const { favCities } = favorite;
    const map = favList.length > 0 && !favCities.loading ? favCities.map((item, i) => {
        return <FavCityItem
            cityName={item.cityName}
            weatherText={item.WeatherText}
            minTemp={item.Temperature.Metric.Value}
            isDatTime={item.IsDayTime}
            icon={item.WeatherIcon}
            cityKey={item.cityKey}
            isDay={item.IsDayTime}
            key={i} />
    }) : <NoFavorites />

    return (
        <div className="favorite">
            {map}
        </div>
    )
}

export default FavPage
