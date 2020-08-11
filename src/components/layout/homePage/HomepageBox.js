import React from 'react'
import { useSelector } from 'react-redux';

import CurrentCityHeader from './currentCity/CurrentCityHeader';
import CurrentCityForeast from './currentCity/CurrentCityForecast';
import { checkIfDay } from '../../../util/functions';
const HomepageBox = () => {
    const currentCity = useSelector(state => state.weatherReducer);
    const isDay = checkIfDay()
    const weatherText = currentCity.searchArr[0].WeatherText
    const style = isDay ?
        {
            backgroundImage: "linear-gradient(to right bottom,#2998ff,#5643fa)",
            color: "#f7f7f7",
        } :
        {
            backgroundImage: "linear-gradient(to right bottom,#667083,#282c34)",
            color: "#9197fb",
        }
    return (
        <div className="current-city" style={style}>
            <CurrentCityHeader />
            <p className="current-city__condition">{weatherText}</p>
            <CurrentCityForeast isDay={isDay} />

        </div>
    )
}

export default HomepageBox
