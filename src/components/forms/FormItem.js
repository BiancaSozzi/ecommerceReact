function FormItem(props) {
    const styles = {
        margin: '10px'
    }

    const onChange = (event) => {
        const label = event.target.name
        const value = event.target.value
        return props.onChangeHandler(label, value)
    }

    return (
        <div style={styles}>
            <label>{props.itemProperties.label} </label>
            <input type={props.itemProperties.type} name={props.itemProperties.label} placeholder={props.itemProperties.placeholder} onChange={onChange}/>
        </div>
    )
}

export default FormItem;
