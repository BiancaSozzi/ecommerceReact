function FormItem(props) {
    const styles = {
        margin: '10px'
    }
    return (
        <div style={styles}>
            <label>{props.itemProperties.label} </label>
            <input type={props.itemProperties.type} placeholder={props.itemProperties.placeholder}/>
        </div>
    )
}

export default FormItem;
