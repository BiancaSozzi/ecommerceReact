import { useState, useEffect } from 'react';
import  Product from '../components/products/Product';

function Home() {

    const [productsList, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/BiancaSozzi/catalogoAngular/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data)
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
