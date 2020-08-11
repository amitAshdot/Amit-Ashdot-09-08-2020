import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { countryToFlag } from '../../util/Autocomplete'
import { clearAutoComplete, setInput, fetchWeather, fetchForecast, setCity, } from '../../store/weather/actions'
import { Paper } from '@material-ui/core';

const AutoComplete = () => {
    const weatherState = useSelector(state => state.weatherReducer);
    const dispatch = useDispatch();

    const handleClick = (chose) => {
        dispatch(setCity(chose.Key, chose.LocalizedName))
        dispatch(fetchWeather(Number(chose.Key)))
        dispatch(fetchForecast(Number(chose.Key)))
        dispatch(setInput(chose.LocalizedName))
        dispatch(clearAutoComplete())
    }
    const listOfCountries = weatherState.autoCompleteList.map((item, i) => {
        return (
            <div className="auto-complete__box" key={i} onClick={() => handleClick(item)}>
                <span>{countryToFlag(item.Country.ID)}</span>
                <p className="auto-complete__box--p" >
                    {item.LocalizedName}
                </p>
            </div>
        )
    })
    return (
        <div className="auto-complete">
            <Paper>
                {listOfCountries}
            </Paper>
        </div>
    )
}

export default AutoComplete