import {Form} from 'react-bootstrap'

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
        <Form.Group style={styles}>
            <Form.Label>{props.itemProperties.label} </Form.Label>
            <Form.Control type={props.itemProperties.type} name={props.itemProperties.label} placeholder={props.itemProperties.placeholder} onChange={onChange}/>
        </Form.Group>
    )
}

export default FormItem;
