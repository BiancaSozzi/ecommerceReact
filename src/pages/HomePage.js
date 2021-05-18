import { useState, useEffect } from 'react';
import  Product from '../components/products/Product';
import {getProducts} from '../services/ProductsService';

function Home() {

    const [productsList, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
        .then(data => {
            setProducts(data.data)
            setLoading(false)
        })
    }, [])

    return (
        <div>
            {
                loading &&
                <p>Loading ...</p>
            }
            {productsList.map(product => <Product product={product}/>)}
        </div>
    )
}

export default Home;
