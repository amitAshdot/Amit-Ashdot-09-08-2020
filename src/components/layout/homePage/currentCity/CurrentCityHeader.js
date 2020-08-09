import React from 'react'
import FavIcon from '../../../ui/icons/FavIcon';
import { useSelector, useDispatch } from 'react-redux';
import { addFav, removeFav } from '../../../../store/weather/actions';
import FavIconEmpty from '../../../ui/icons/FavIconEmpty';
import { } from '../../../../util/functions';

const CurrentCityHeader = () => {
    const weatherState = useSelector(state => state.weatherReducer);
    const { weatherIcon, favCities, currentCityKey, searchArr } = weatherState;
    const dispatch = useDispatch();
    const city = searchArr[0]
    const iconeUrl = `https://developer.accuweather.com/sites/default/files/${weatherIcon}-s.png`
    let isFav = favCities.includes(currentCityKey)

    const handleClick = () => {
        isFav ? dispatch(removeFav(weatherState.currentCityKey)) :
            dispatch(addFav(weatherState.currentCityKey))
    }

    const favIcon = (
        isFav ? < FavIcon clicked={handleClick} /> : <FavIconEmpty clicked={handleClick} />
    )
    return (
        <div className="current-city__header">
            <div className="current-city__header__left">
                <div className="current-city__header__left--image">
                    <img src={iconeUrl} alt="weather condition" />
                </div>
                <div className="current-city__header__left--info">
                    <p className="current-city__header__left--name">jkjk</p>
                    <p className="current-city__header__left--temperature">{city.Temperature.Metric.Value} </p>
                </div>

            </div>
            <div className="current-city__header__right">
                {favIcon}
            </div >

        </div>
    )
}

export default CurrentCityHeader
