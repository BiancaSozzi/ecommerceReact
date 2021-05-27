import { useState } from 'react';
import {createProduct, updateProduct, deleteProduct} from '../services/ProductsService'
import {useHistory} from "react-router-dom"
import ButtonWithLoading from "../components/forms/ButtonWithLoading"
import RegularButton from "../components/button/Button"
import { Container, Col, Row, Form} from 'react-bootstrap'

function ABMProduct(props) {

    const productId = props.match.params.id || null;
    const product = props.location.data
    const[data, setData] = useState(
        {
            'name': product && product.name,
            'price': product && product.price,
            'sku': product && product.sku,
            'image': product && product.image || '',
            'details': product && product.details,
            'description': product && product.description,
            'available': product && product.available
        }
    )
    const isCreate = productId == null
    const history = useHistory()
    const imgStyle = {
        width: '200px'
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData({...data, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (productId == null){
            createProduct(data)
            .then(doc => {
                alert("Producto creado!")
                history.push('/')
                console.log("doc", doc)
            })
            .catch(error => {
                console.log("error", error)
            })
        } else {
            updateProduct(productId, data)
            .then(doc => {
                alert("Producto editado correctamente!")
                console.log("doc", doc)
            })
            .catch(error => {
                console.log("error", error)
            })
        }
    }

    const handleDelete = (event) => {
        event.preventDefault()
        deleteProduct(productId)
        .then(doc => {
            history.push('/')
        })
        .catch(error => {
            console.log("error", error)
        })
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Form onSubmit={handleSubmit}>
                    {
                        data.image &&
                        <img style={imgStyle} src={data.image} alt="product"/>
                    }
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="name" value={data.name} onChange={handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="number" name="price" value={data.price} onChange={handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>SKU</Form.Label>
                        <Form.Control type="text" name="sku" value={data.sku} onChange={handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control type="text" name="image" value={data.image} onChange={handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Detalles</Form.Label>
                        <Form.Control type="text" name="details" value={data.details} onChange={handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type="text" name="description" value={data.description} onChange={handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Disponible</Form.Label>
                        <Form.Control type="number" name="available" value={data.available} onChange={handleChange}></Form.Control>
                    </Form.Group>
                    <Row>
                        <Col>
                            <ButtonWithLoading type="submit">Guardar</ButtonWithLoading>
                        </Col>
                        <Col>
                            {
                                !isCreate &&
                                <RegularButton handler={handleDelete}>Eliminar</RegularButton>
                            }
                        </Col>
                    </Row>
                </Form>
            </Row>
        </Container>
    )
}

export default ABMProduct;
