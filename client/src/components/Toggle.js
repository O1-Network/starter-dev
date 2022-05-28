const Toggle = (props) => {

    return (
        <div id="toggle">
            <div variant="contained" aria-label="outlined primary button group">
                <button id="developer-button" onClick={props.handleClick} >Developer</button>
                <button id="business-button" onClick={props.handleClick} >Business</button>
            </div>
        </div>
    )
}

export default Toggle;