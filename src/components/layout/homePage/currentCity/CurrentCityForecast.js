import React from 'react'
import { useSelector } from 'react-redux';
import { checkDay } from '../../../../util/functions';
import CurrentCityForecastItem from './CurrentCityForecastItem';

const CurrentCityForeast = () => {
    const weather = useSelector(state => state.weatherReducer);
    const map = weather.forecast.DailyForecasts.map((item, i) => {
        const weekday = checkDay(i)
        return <CurrentCityForecastItem weekday={weekday} minTemp={item.Temperature.Minimum.Value} maxTemp={item.Temperature.Maximum.Value} key={i} />
    }).reverse()

    return (
        <div className="forecast">
            {map}
        </div>
    )
}

export default CurrentCityForeast
