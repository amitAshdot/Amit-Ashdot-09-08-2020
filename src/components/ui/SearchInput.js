import React from 'react'
import TextField from '@material-ui/core/TextField';
const SearchInput = (props) => {
    return (
        <div className={`homepage__input`}>
            <TextField
                id="outlined-textarea"
                label="Search"
                placeholder="ex. Tel-Aviv"
                onChange={props.handleChange}
                multiline
                variant="outlined"
            />


        </div >
    )
}

export default SearchInput
