import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Brightness6Icon from '@material-ui/icons/Brightness6';
const DarkModeIcon = (props) => {

    const color = props.dark ? "#f7f7f7" : "#2998ff"
    return (
        <IconButton aria-label="add to favorites" style={{ color: color }} onClick={props.clicked} >
            <Brightness6Icon style={{ fontSize: '2rem' }} />
        </IconButton>
    )
}

export default DarkModeIcon
