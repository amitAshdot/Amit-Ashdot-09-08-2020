import React from 'react'
import TextField from '@material-ui/core/TextField';

const SearchInput = (props) => {
    return (
        <div className={`homepage__input`}>
            <div className="main__error">
                {props.hasError}
            </div>
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
