import {useState, useEffect} from 'react';
import ProductDetails from '../components/products/ProductDetails'

function Details(props) {

    const productId = props.match.params.id;
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/BiancaSozzi/catalogoAngular/products/" + productId)
        .then(res => res.json())
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
