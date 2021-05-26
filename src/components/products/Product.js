import {Link} from "react-router-dom"
import RegularButton from '../../components/button/Button'

function Product(props) {
    return (
        <div>
            <label>{props.product.name}</label>
            <Link to={"/products/" + props.id}><RegularButton>More details</RegularButton></Link>
        </div>
    )
}

export default Product;
