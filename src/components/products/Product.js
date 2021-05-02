import {Link} from "react-router-dom"
import DetailsBtn from './DetailsBtn'

function Product(props) {
    return (
        <div>
            <label>{props.product.name}</label>
            <Link to={"/products/" + props.product.id}><DetailsBtn/></Link>
        </div>
    )
}

export default Product;
