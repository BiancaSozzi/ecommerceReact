import {Button} from 'react-bootstrap'

function RegularButton(props) {
    const {variant, handler} = props
    return (
        <Button
        variant={variant || "primary"}
        onClick={handler}>
            {props.children}
        </Button>
    )
}

export default RegularButton
