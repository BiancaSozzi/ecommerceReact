import {useState, useEffect} from 'react';
import ProductDetails from '../components/products/ProductDetails'
import RegularButton from "../components/button/Button"
import {getProduct} from '../services/ProductsService'
import {useHistory} from "react-router-dom"

function Details(props) {

    const productId = props.match.params.id;
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const history = useHistory()

    useEffect(() => {
        getProduct(productId)
        .then(doc => {
            setProduct(doc.data())
            setLoading(false)
        })
    }, [])

    const editProduct = () => {
        history.push({
            pathname: '/products/' + productId + '/edit',
            data: product
        })
    }

    return (
        <div>
            {
                loading &&
                <p>Loading ...</p>
            }
            {
                !loading &&
                <ProductDetails product={product} productId={productId}/>
            }
            <RegularButton handler={editProduct}>Edit Product</RegularButton>
        </div>
    )

}

export default Details;
