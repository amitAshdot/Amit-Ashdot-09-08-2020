import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { countryToFlag } from '../../util/countryToFlag'
import { setChosenCity, } from '../../store/weather/actions'
import { Paper } from '@material-ui/core';

const AutoComplete = () => {
    const weatherState = useSelector(state => state.weatherReducer);
    const dispatch = useDispatch();

    const handleClick = (chose) => {
        dispatch(setChosenCity(chose.Key, chose.LocalizedName))
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