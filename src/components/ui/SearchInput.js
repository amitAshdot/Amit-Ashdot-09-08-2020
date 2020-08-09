import React from 'react'
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { setInput } from '../../store/weather/actions'
const SearchInput = () => {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        event.preventDefault();
        dispatch(setInput(event.target.value))
    }
    return (
        <div className="homepage__input">
            <TextField
                id="outlined-textarea"
                label="Search"
                placeholder="ex. Tel-Aviv"
                onChange={handleChange}
                multiline
                variant="outlined"
            />
        </div >
    )
}

export default SearchInput
