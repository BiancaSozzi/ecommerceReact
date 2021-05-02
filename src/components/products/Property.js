function Property(props) {
    const fontStyles = {
        fontWeight: 'bold'
    }
    const marginStyles = {
        margin: '5px'
    }
    return (
        <div style={marginStyles}>
            <label style={fontStyles}>{props.label}: </label> {props.value}
        </div>
    )
}

export default Property;
