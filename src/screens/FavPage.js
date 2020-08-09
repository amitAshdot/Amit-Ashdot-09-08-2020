import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { checkDay } from '../util/functions';
import CurrentCityForecastItem from '../components/layout/homePage/currentCity/CurrentCityForecastItem'
const FavPage = () => {
    const weather = useSelector(state => state.weatherReducer);
    const dispatch = useDispatch();

    const { favCities } = weather;
    // const map = favCities.map((item, i) => {
    //     const weekday = checkDay(i)
    //     return <CurrentCityForecastItem weekday={weekday} minTemp={item.Temperature.Minimum.Value} maxTemp={item.Temperature.Maximum.Value} key={i} />
    // })
    return (
        <div className="favorite">
            {/* {map} */}

        </div>
    )
}

export default FavPage
