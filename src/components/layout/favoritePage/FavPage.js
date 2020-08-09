import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import CurrentCityHeader from './currentCity/CurrentCityHeader';
import CurrentCityForeast from './currentCity/CurrentCityForecast';

const FavPage = () => {
    const currentCity = useSelector(state => state.weatherReducer);
    const dispatch = useDispatch();

    return (
        <div className="favorite">

        </div>
    )
}

export default FavPage
