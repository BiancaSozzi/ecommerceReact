import {Link} from "react-router-dom"
import RegularButton from '../../components/button/Button'
import { Container, Row, Col} from 'react-bootstrap';

function Product(props) {
    return (
        <Container>
            <Row>
                <Col xs>
                    <label>{props.product.name}</label>
                </Col>
                <Col xs={{ order: 1 }}>
                    <Link to={"/products/" + props.id}><RegularButton>More details</RegularButton></Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Product;
