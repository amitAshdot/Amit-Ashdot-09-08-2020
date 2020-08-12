import React, { useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { setInput, getAutoComplete, setError, clearAutoComplete } from '../../store/weather/actions'
import SearchError from './SearchError';

const SearchInput = (props) => {
    const weatherState = useSelector(state => state.weatherReducer);
    const dispatch = useDispatch();
    const { userSearchInput } = weatherState


    useEffect(() => {
        if (userSearchInput !== ' ' && userSearchInput.length) {
            const timer = setTimeout(() => {
                dispatch(getAutoComplete(weatherState.userSearchInput))
            }, 450);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [userSearchInput]);

    return (
        <div className={`homepage__input`}>

            {props.hasError ? <SearchError errorText={props.hasError} /> : null}
            <TextField
                id="outlined-textarea"
                label="Search"
                placeholder="ex. Tel-Aviv"
                onChange={props.handleChange}
                onKeyPress={props.onKeyPress}
                multiline
                variant="outlined"
                value={props.value}
                color="primary"
            />
            {props.hasAutoComplete}
        </div >
    )
}

export default SearchInput
