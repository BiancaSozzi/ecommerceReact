import {Button, Spinner} from 'react-bootstrap'

function ButtonWithLoading(props){
    const {variant,type,loading,text} = props
    return (
        <Button
            type={type || "submit"}
            variant={variant || "primary"}
            disabled={loading}>
                {
                    loading &&
                    <Spinner animation="border" size="sm" />
                }

            {props.children}
        </Button>
    )
}

export default ButtonWithLoading;
