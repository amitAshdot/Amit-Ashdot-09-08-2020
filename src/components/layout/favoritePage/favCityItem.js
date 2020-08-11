import React from 'react'
import { calcFahrenheit } from '../../../util/functions'
import { useSelector } from 'react-redux';
import { getIconUrl } from '../../../util/functions'
const CurrentCityForecastItem = (props) => {
    const settings = useSelector(state => state.settingsReducer);

    const { i, cityName, weatherText, icon } = props
    const minTemp = settings.celsius ? props.minTemp : calcFahrenheit(props.minTemp)
    return (
        <div className="favorite__box" key={i}>
            <div >
                <img src={getIconUrl(icon)} alt="weather condition" className="favorite__box__image" />
            </div>
            <div className="favorite__box__city-name">
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
