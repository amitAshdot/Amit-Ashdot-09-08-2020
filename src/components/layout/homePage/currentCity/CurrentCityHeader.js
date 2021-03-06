import React from 'react'
import FavIcon from '../../../ui/icons/FavIcon';
import { useSelector, useDispatch } from 'react-redux';
import { addFav, removeFav } from '../../../../store/favorite/actions';
import FavIconEmpty from '../../../ui/icons/FavIconEmpty';
import { getIconUrl } from '../../../../util/helpers'
const CurrentCityHeader = () => {
    const weatherState = useSelector(state => state.weatherReducer);
    const settings = useSelector(state => state.settingsReducer);
    const favorite = useSelector(state => state.favoriteReducer);
    const { weatherIcon, currentCityKey, searchArr, currentCityName } = weatherState;
    const { favCitiesKey } = favorite;
    const dispatch = useDispatch();
    const city = searchArr[0]

    let isFav = favCitiesKey.some(city => city.cityKey === currentCityKey)

    const handleClick = () => {
        isFav ? dispatch(removeFav(favorite.favCitiesKey, weatherState.currentCityKey)) :
            dispatch(addFav(favorite.favCitiesKey, currentCityKey, currentCityName))
    }

    const favIcon = (
        isFav ? < FavIcon clicked={handleClick} /> : <FavIconEmpty clicked={handleClick} />
    )

    const currentTemp = settings.celsius ? city.Temperature.Metric.Value : city.Temperature.Imperial.Value
    return (
        <div className="current-city__header">
            <div className="current-city__header__left">
                <div className="current-city__header__left--image">
                    <img src={getIconUrl(weatherIcon)} alt="weather condition" />
                </div>
                <div className="current-city__header__left--info">
                    <p className="current-city__header__left--name">{weatherState.currentCityName}</p>
                    <p className="current-city__header__left--temperature">{currentTemp}&deg; </p>
                </div>

            </div>
            <div className="current-city__header__right">
                {favIcon}
            </div >

        </div>
    )
}

export default CurrentCityHeader
