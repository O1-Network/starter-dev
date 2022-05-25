import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import "./Toggle.css"




const Toggle = (props) => {

    return (
        <div id="toggle">

            {/* Depreciated */}
            {/* <button id="business-button" onClick={props.handleClick}>
                Business
            </button>

            <button id="developer-button" onClick={props.handleClick}>
                Developer
            </button> */}

            <ButtonGroup id="buttoncontainer"  variant="contained" aria-label="outlined primary button group">
                <Button  id="developer-button" onClick={props.handleClick} >Developer</Button>
                <Button id="business-button" onClick={props.handleClick} >Business</Button>
            </ButtonGroup>
        </div>
    )
}




export default Toggle;