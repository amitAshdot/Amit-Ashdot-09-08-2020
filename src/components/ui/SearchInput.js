import React from 'react'
import TextField from '@material-ui/core/TextField';
import AutoComplete from './AutoComplete';
import { useSelector } from 'react-redux';

const SearchInput = (props) => {
    const weatherState = useSelector(state => state.weatherReducer);

    const hasAutoComplete = weatherState.userSearchInput ? <AutoComplete /> : null

    return (
        <div className={`homepage__input`}>
            <TextField
                id="outlined-textarea"
                label="Search"
                placeholder="ex. Tel-Aviv"
                onChange={props.handleChange}
                multiline
                variant="outlined"
                value={props.value}
            />
            {hasAutoComplete}


        </div >
    )
}

export default SearchInput
