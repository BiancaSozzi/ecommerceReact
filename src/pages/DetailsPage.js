import {useState, useEffect} from 'react';
import ProductDetails from '../components/products/ProductDetails'
import {getProduct} from '../services/ProductsService'

function Details(props) {

    const productId = props.match.params.id;
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProduct(productId)
        .then(data => {
            setProduct(data)
            setLoading(false)
        })
    }, [])

    return (
        <div>
            {
                loading &&
                <p>Loading ...</p>
            }
            {
                !loading &&
                <ProductDetails product={product}/>
            }
        </div>
    )

}

export default Details;
