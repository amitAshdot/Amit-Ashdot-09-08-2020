import React from 'react'
import { useSelector } from 'react-redux';
import { checkDay } from '../../../../util/functions';
import CurrentCityForecastItem from './CurrentCityForecastItem';
import { calcFahrenheit } from '../../../../util/functions'
const CurrentCityForeast = (props) => {
    const weather = useSelector(state => state.weatherReducer);
    const settings = useSelector(state => state.settingsReducer);
    const map = weather.forecast.DailyForecasts.map((item, i) => {
        const weekday = checkDay(i)
        const minTemp = settings.celsius ? item.Temperature.Minimum.Value : calcFahrenheit(item.Temperature.Minimum.Value)
        const maxTemp = settings.celsius ? item.Temperature.Maximum.Value : calcFahrenheit(item.Temperature.Maximum.Value)
        return <CurrentCityForecastItem weekday={weekday} minTemp={minTemp} maxTemp={maxTemp} key={i} icon={item.Day.Icon} isDay={props} />
    }).reverse()

    return (
        <div className="forecast">
            {map}
        </div>
    )
}

export default CurrentCityForeast
