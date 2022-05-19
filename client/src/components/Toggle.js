const Toggle = (props) => {

    return(
        <div id="toggle">
            <button id="business-button" onClick={props.handleClick}>
                Business
            </button>

            <button id="developer-button" onClick={props.handleClick}>
                Developer
            </button>
        </div>
    )
}

export default Toggle;