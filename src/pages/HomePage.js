import { useState, useEffect } from 'react';
import  Product from '../components/products/Product';
import {getProducts} from '../services/ProductsService';
import { Container, Row} from 'react-bootstrap';

function Home() {

    const [productsList, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
        .then(querySnapshot => {
            setProducts(querySnapshot.docs)
            setLoading(false)
        })
    }, [])

    return (
        <Container>
            <Row className="justify-content-md-center">
                <div>
                    {
                        loading &&
                        <p>Loading ...</p>
                    }
                    {productsList.map(product => <Product product={product.data()} id={product.id}/>)}
                </div>
            </Row>
        </Container>
    )
}

export default Home;
