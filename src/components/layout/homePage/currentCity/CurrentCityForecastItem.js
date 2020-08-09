import React from 'react'

const CurrentCityForecastItem = (props) => {
    const { i, weekday, minTemp, maxTemp } = props
    return (
        <div className="forecast__box" key={i}>
            <div className="forecast__box__day">
                <p>{weekday}</p>
            </div>
            <div className="forecast__box__temp">
                <p>{minTemp}</p>
            </div>
            <div className="forecast__box__temp">
                <p>{maxTemp}</p>
            </div>
        </div>
    )
}

export default CurrentCityForecastItem
