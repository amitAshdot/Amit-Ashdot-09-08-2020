import React from 'react'

const CurrentCityForecastItem = (props) => {
    const { i, weekday, minTemp, maxTemp, icon, isDay } = props
    const dayicon = icon >= 10 ? `https://developer.accuweather.com/sites/default/files/${icon}-s.png`
        : `https://developer.accuweather.com/sites/default/files/0${icon}-s.png`
    const color = isDay ? "#9197fb80" : '#9197fb'
    const style = { color: color }
    return (
        <div className="forecast__box" key={i}>
            <div >
                <img src={dayicon} alt="weather condition" className="forecast__box__image" />
            </div>

            <div className="forecast__box__day">
                <p>{weekday}</p>
            </div>
            <div className="forecast__box__temp" >
                <p>{maxTemp}&deg;</p>
            </div>
            <div className="forecast__box__temp">
                <p>{minTemp}&deg;</p>
            </div>
        </div>
    )
}

export default CurrentCityForecastItem
