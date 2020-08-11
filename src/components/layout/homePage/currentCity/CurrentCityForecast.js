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
        const minTemp = settings.celsius ? Number(item.Temperature.Minimum.Value).toFixed(0) : Number(calcFahrenheit(item.Temperature.Minimum.Value)).toFixed(0)
        const maxTemp = settings.celsius ? Number(item.Temperature.Maximum.Value).toFixed(0) : Number(calcFahrenheit(item.Temperature.Maximum.Value)).toFixed(0)

        return <CurrentCityForecastItem weekday={weekday} minTemp={minTemp} maxTemp={maxTemp} key={i} icon={item.Day.Icon} isDay={props.isDay} />
    }).reverse()

    return (
        <div className="forecast">
            {map}
        </div>
    )
}

export default CurrentCityForeast
