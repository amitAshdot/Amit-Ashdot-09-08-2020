import React from 'react'

const SearchError = (props) => {
    return (
        <div className="main__error">
            {props.errorText}
        </div>
    )
}

export default SearchError
