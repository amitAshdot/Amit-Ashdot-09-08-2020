import React from 'react'

const CurrentCityForecastItem = (props) => {
    const { i, weekday, minTemp, maxTemp } = props
    return (
        <div className="favorite__box" key={i}>
            <div className="favorite__box__day">
                <p>{weekday}</p>
            </div>
            <div className="favorite__box__temp">
                <p>{minTemp}</p>
            </div>
        </div>
    )
}

export default CurrentCityForecastItem
