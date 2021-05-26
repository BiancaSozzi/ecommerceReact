import { useState } from 'react';
import {createProduct, updateProduct, deleteProduct} from '../services/ProductsService'
import {useHistory} from "react-router-dom"
import ButtonWithLoading from "../components/forms/ButtonWithLoading"

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
        <form onSubmit={handleSubmit}>
            {
                data.image &&
                <img style={imgStyle} src={data.image} alt="product"/>
            }
            <div>
                <label>Nombre</label>
                <input type="text" name="name" value={data.name} onChange={handleChange}></input>
            </div>
            <div>
                <label>Precio</label>
                <input type="number" name="price" value={data.price} onChange={handleChange}></input>
            </div>
            <div>
                <label>SKU</label>
                <input type="text" name="sku" value={data.sku} onChange={handleChange}></input>
            </div>
            <div>
                <label>Imagen</label>
                <input type="text" name="image" value={data.image} onChange={handleChange}></input>
            </div>
            <div>
                <label>Detalles</label>
                <input type="text" name="details" value={data.details} onChange={handleChange}></input>
            </div>
            <div>
                <label>Descripcion</label>
                <input type="text" name="description" value={data.description} onChange={handleChange}></input>
            </div>
            <div>
                <label>Disponible</label>
                <input type="number" name="available" value={data.available} onChange={handleChange}></input>
            </div>
            <ButtonWithLoading type="submit">Guardar</ButtonWithLoading>
            {
                !isCreate &&
                <ButtonWithLoading onClick={handleDelete}>Eliminar</ButtonWithLoading>
            }

        </form>
    )
}

export default ABMProduct;
