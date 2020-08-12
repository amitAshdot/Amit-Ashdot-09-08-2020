import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getIconUrl, calcFahrenheit } from '../../../util/helpers'
import { setChosenCity, } from '../../../store/weather/actions'
import { useHistory } from 'react-router-dom'

const CurrentCityForecastItem = (props) => {
    let history = useHistory()

    const settings = useSelector(state => state.settingsReducer);
    const dispatch = useDispatch();
    const { i, cityName, weatherText, icon, cityKey, isDay } = props
    const minTemp = settings.celsius ? props.minTemp : calcFahrenheit(props.minTemp)

    const handleClick = () => {
        dispatch(setChosenCity(cityKey, cityName))
        history.goBack()
    }

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
        <div className="favorite__box" onClick={handleClick} style={style} key={i}>
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
