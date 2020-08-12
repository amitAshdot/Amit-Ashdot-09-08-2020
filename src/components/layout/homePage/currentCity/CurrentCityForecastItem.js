import React from 'react'
import { getIconUrl } from '../../../../util/functions'
const CurrentCityForecastItem = (props) => {
    const { i, weekday, minTemp, maxTemp, icon, isDay } = props
    const color = isDay ? '#f7f7f780' : "#9197fb80"
    const style = { color: color }

    return (
        <div className="forecast__box" key={i}>
            <div >
                <img src={getIconUrl(icon)} alt="weather condition" className="forecast__box__image" />
            </div>
            <div className="forecast__box__day">
                <p>{weekday}</p>
            </div>
            <div className="forecast__box__temp" >
                <p>{maxTemp}&deg;</p>
            </div>
            <div className="forecast__box__temp" style={style}>
                <p>{minTemp}&deg;</p>
            </div>
        </div>
    )
}

export default CurrentCityForecastItem
