import React from 'react'
import { calcFahrenheit } from '../../../util/functions'
import { useSelector } from 'react-redux';

const CurrentCityForecastItem = (props) => {
    const settings = useSelector(state => state.settingsReducer);

    const { i, cityName, weatherText } = props
    const minTemp = settings.celsius ? props.minTemp : calcFahrenheit(props.minTemp)

    return (
        <div className="favorite__box" key={i}>
            <div className="favorite__box__day">
                <p>{cityName}</p>
            </div>
            <div className="favorite__box__temp">
                <p>{minTemp}</p>
            </div>
            <div className="favorite__box__condition">
                <p>{weatherText}</p>
            </div>
        </div>
    )
}

export default CurrentCityForecastItem
